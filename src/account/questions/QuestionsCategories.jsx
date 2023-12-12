import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
export default function QuestionsCategories() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            <h2>Question Categories</h2>
            <Card sx={{ minWidth: 275 }}>
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="IT" />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="General" />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Technology" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Card>
        </Box>
    );
}