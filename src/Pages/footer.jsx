import { Box, Typography } from '@mui/material';

function footer() {
    return (
        <Box component="footer" padding={2} textAlign="center" bgcolor="grey.200">
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} Dragon Ball Api. Todos los derechos reservados.
            </Typography>
        </Box>
    );
}

export default footer;
