import {
  CardHeader,
  CardMedia,
  CardContent,
  Card,
  Box,
  Pagination,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Filtros from "../componentes/filtros";
import Footer from "../Pages/footer";
import logo from "../assets/logo_dragonballapi.webp";

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("https://dragonball-api.com/api/characters?limit=100")
      .then((response) => {
        const data = response.data.items || [];
        setCharacters(data);
        applyFilter(data, filter); // Aplica el filtro inicial
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [filter]);

  const applyFilter = (characters, filterType) => {
    let filtered = characters;

    if (filterType === "human") {
      filtered = characters.filter((character) => character.race === "Human");
    } else if (filterType === "non-human") {
      filtered = characters.filter((character) => character.race !== "Human");
    }

    setFilteredCharacters(filtered);
    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
    setPage(1);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    applyFilter(characters, newFilter);
  };

  const handleCardClick = (id) => {
    navigate(`/character/${id}`);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const displayedCharacters = filteredCharacters.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={2}
      >
        <img
          src={logo}
          alt="Dragon Ball API Logo"
          style={{ width: 100, height: "auto", marginRight: 16 }}
        />
        <Typography variant="h3" component="h1">
          DragonBall API
        </Typography>
      </Box>

      <Filtros filter={filter} onFilterChange={handleFilterChange} />

      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={2}
        padding={2}
      >
        {displayedCharacters.map((character) => (
          <Card
            sx={{
                overflow: "hidden",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
            }}
            key={character.id}
            // resaltar personajes
            style={{
              margin: "10px",
              maxWidth: "450px",
              backgroundColor: "#FFE4E1",
            }}
            onClick={() => handleCardClick(character.id)}
          >
            <CardHeader title={<Typography variant="h6" component="div" fontWeight="bold">{character.name}</Typography>}  />
            <CardMedia
              component="img"
              height="180"
              sx={{
                objectFit: "contain",
                width: "100%",
                maxHeight: "180px",
                objectPosition: "center center",
                zIndex: 0,
                transition: "transform 0.6s",
              }}
              image={character.image}
              alt={character.name}
            />
            <CardContent>
              <p>Ki: {character.ki}</p>
              <p>Raza: {character.race}</p>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box display="flex" justifyContent="center" marginY={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Box>
      <Footer />
    </div>
  );
}

export default HomePage;
