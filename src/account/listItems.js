import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import EventIcon from '@mui/icons-material/Event';
import QuizIcon from '@mui/icons-material/Quiz';
export const mainListItems = (
    <React.Fragment>
        <ListItemButton button component="a" href="/account/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton button component="a" href="events">
            <ListItemIcon>
                <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
        </ListItemButton>
        <ListItemButton button component="a" href="questions">
            <ListItemIcon>
                <QuizIcon />
            </ListItemIcon>
            <ListItemText primary="Questions" />
        </ListItemButton>
        <ListItemButton button component="a" href="reports">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItemButton>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>

        </ListSubheader>

    </React.Fragment>
);