import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import QuizIcon from '@mui/icons-material/Quiz';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { ListItem } from '../../../node_modules/@mui/material/index';
import { Link } from '../../../node_modules/react-router-dom/dist/index';
function AccountLeftMenu() {
    return (
        <div>

            <React.Fragment>
                <ListItem button component={Link} to="/account/">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/account/events">
                    <ListItemIcon>
                        <EventIcon />
                    </ListItemIcon>
                    <ListItemText primary="Events" />
                </ListItem>
                <ListItem button component={Link} to="/account/questions">
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Questions" />
                </ListItem>
                {/* <ListItem button component={Link} to="/account/reports">
                    <ListItemIcon>
                        <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                </ListItem> */}
            </React.Fragment>
        </div>
    );
}

export default AccountLeftMenu;