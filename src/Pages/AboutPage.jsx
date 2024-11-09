import { Box, Typography } from '@mui/material';

function AboutPage() {
    return (
        <Box sx={{ padding: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Acerca de 
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Esta web permite explorar personajes de Dragon Ball, incluyendo detalles sobre humanos y no humanos. Fue desarrollada por una estudiante de ingeniería de sistemas de launiversidad de la Amazonia,como parte de una actividad escolar, tiene como fin filtrar los personajes de la amada y aclamada serie de dragon ball z, recordadada copn mucho cariño por parte de sus fans.
            </Typography>
        </Box>
    );
}

export default AboutPage;
