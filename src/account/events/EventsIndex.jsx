import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container } from '../../../node_modules/@mui/material/index';
import ViewEvents from './ViewEvents';
function EventsIndex() {
    const navigate = useNavigate();
    const addEvent = (event) => {
        navigate('/account/events/add');
    };
    return (
        <div>
            <Container >

                <Box component="span" sx={{ p: 2 }}>
                    <Button variant="contained" onClick={addEvent} endIcon={<AddCircleIcon />}>
                        Add Event
                    </Button>
                </Box>
                <br />
                <ViewEvents />
            </Container>
        </div>
    );
}

export default EventsIndex;