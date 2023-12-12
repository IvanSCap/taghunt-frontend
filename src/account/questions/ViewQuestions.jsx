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

export default function ViewQuestions() {
    const [flag, setFlag] = useState(false)
    const [questionsData, setQuestionsData] = useState(null);
    const navigate = useNavigate();
    const editQuestion = (questionid) => {
        //showmsg("Will try to edit event id " + eventid);
        navigate('/account/events/viewquestion/' + questionid);
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
        axios.get(commonurls.questionsurl, config)
            .then((res) => {
                //showmsg("got some response");
                setFlag(true);
                //showmsg("response from api is :" + res.data)
                setQuestionsData(res.data);
                //showmsg("event data is :" + eventData);
            })
            .catch((error) => {
                // console.error(error)
            })
    }, [])

    return (
        <div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} aria-label="simple table" stickyHeader >
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{ minWidth: 20 }}>Id</TableCell>
                            <TableCell align="left" sx={{ minWidth: 250 }}>Description</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flag && questionsData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Button variant="outlined" onClick={() => editQuestion(row.id)} >
                                        {row.id}
                                    </Button>
                                </TableCell>
                                <TableCell align="left">{row.description}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}