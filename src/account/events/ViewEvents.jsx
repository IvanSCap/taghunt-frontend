import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import { Button } from '../../../node_modules/@mui/material/index';
import axios from '../../../node_modules/axios/index';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import commonurls from '../../commonurls';

export default function ViewEvents() {
    const [flag, setFlag] = useState(false)
    const [eventData, setEventData] = useState(null);
    const navigate = useNavigate();
    const editEvent = (eventid) => {
        //showmsg("Will try to edit event id " + eventid);
        navigate('/account/events/viewevent/' + eventid);
    }
    let formatDate = (dateval) => {
        let result = dateval.substring(0, 10);
        return result;
    }
    // 3. Create out useEffect function
    useEffect(() => {
        /*
        fetch(commonurls.eventurls)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setEventsData(data))
            */
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        //showmsg("trying to get data");
        axios.get(commonurls.eventurls, config)
            .then((res) => {
                //showmsg("got some response");
                setFlag(true);
                //showmsg("response from api is :" + res.data)
                setEventData(res.data);
                //showmsg("event data is :" + eventData);
            })
            .catch((error) => {
                // console.error(error)
            })
    }, [])

    return (
        <div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Address&nbsp;</TableCell>
                            <TableCell align="right">Start Date&nbsp;</TableCell>
                            <TableCell align="right">End Date&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flag && eventData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Button variant="outlined" onClick={() => editEvent(row.id)} >
                                        {row.id}
                                    </Button>
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{formatDate(row.startDate)}</TableCell>
                                <TableCell align="right">{formatDate(row.endDate)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}