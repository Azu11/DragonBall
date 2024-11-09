import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CardHeader, CardMedia, CardContent, Box, Typography, Card } from '@mui/material'

function CharacterPage() {
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
      axios.get(`https://dragonball-api.com/api/characters/${id}`).then((response) => {
        setCharacter(response.data)
      }).catch((error) => {
        console.log(error)
      })
    }, [id])
    if (!character.id) {
      return <div>Loading...</div>
    }
  return (
 <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    <Card sx={{ maxWidth: 400, margin: '10px', backgroundColor: '#FFE4E1' }}>
      <CardHeader title={character.name } />
      <CardMedia
        component="img"
        height="180"
        sx={{ objectFit: 'contain', width: '100%', maxHeight: '180px' }} 
        image={character.image}
        alt={character.name}
      />
      <CardContent>
        <Typography variant="body2" color="#000000">
          {character.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.species}
        </Typography>
         </CardContent>
    </Card>
  </Box>            
  )
}

export default CharacterPage