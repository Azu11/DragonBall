import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import HomePage from './Pages/HomePage';
import CharacterPage from './Pages/character';
import AboutPage from './Pages/AboutPage'; 

const theme = createTheme({
  palette: {
    primary: {
      main: '#d5006d', 
    },
    secondary: {
      main: '#ffeef8', 
    },
    background: {
      default: '#ffeef8',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;


