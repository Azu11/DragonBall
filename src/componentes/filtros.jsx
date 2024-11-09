import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Filtros = ({ filter, onFilterChange }) => {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 2 }}>
            <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => onFilterChange('all')}>
                Todos
            </Button>
            <Button variant={filter === 'human' ? 'contained' : 'outlined'} onClick={() => onFilterChange('human')}>
                Humanos
            </Button>
            <Button variant={filter === 'non-human' ? 'contained' : 'outlined'} onClick={() => onFilterChange('non-human')}>
                No Humanos
            </Button>
            <Button variant="outlined" onClick={() => navigate('/about')}>
                Acerca de
            </Button>
        </Box>
    );
};

Filtros.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default Filtros;
