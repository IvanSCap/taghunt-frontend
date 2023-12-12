import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import { Button, Grid } from "../../../node_modules/@mui/material/index";
import axios from "../../../node_modules/axios/index";
import { useNavigate, useParams } from "../../../node_modules/react-router-dom/dist/index";
import commonurls from "../../commonurls";

function ViewQuestionById() {
    const [flag, setFlag] = useState(false);
    const [locationsLoaded, setLocationsLoaded] = useState(false);
    const [eventByIdData, seteventByIdData] = useState(null);
    const [locationIds, setLocationIds] = useState(null);
    let { id } = useParams();
    const navigate = useNavigate();
    let formatDate = (dateval) => {
        let result = dateval.substring(0, 10);
        return result;
    }

    useEffect(() => {

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        //showmsg("trying to get data");
        axios.get(commonurls.eventurls + "/locations/" + id, config)
            .then((res) => {
                //console.log("Location response from api is :" + JSON.stringify(res.data))
                setLocationIds(res.data);
                setLocationsLoaded(true);
                //showmsg("location data is :" + locationIds);
            })
            .catch((error) => {
                // console.error(error)
            });
        axios.get(commonurls.eventurls + "/" + id, config)
            .then((res) => {
                //showmsg("got some response");
                setFlag(true);
                //showmsg("response from api is :" + JSON.stringify(res.data));
                seteventByIdData(res.data);
                //showmsg("event data is :" + eventByIdData);
            })
            .catch((error) => {
                // console.error(error)
            })
    }, []);
    const openeditpage = () => {
        navigate("/account/events/edit/" + id);
    }
    const deleteevent = () => {
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        axios.delete(commonurls.eventurls + "/" + id, config)
            .then((res) => {
                alert("Event has been deleted");
                navigate('/account/events');

            })
            .catch((error) => {
                // console.error(error)
            });

    }
    return (
        <div>
            <h2>Event Details :  {id} &nbsp;<Button variant="text" onClick={openeditpage}><EditIcon /></Button> <Button variant="text" onClick={deleteevent}><DeleteIcon /></Button></h2>
            {flag === true &&
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <h4>Event Name</h4>
                        </Grid>
                        <Grid item xs={4}>
                            <h3>{eventByIdData.name}</h3>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <h4>Event Address</h4>
                        </Grid>
                        <Grid item xs={4}>
                            <h3>{eventByIdData.address}</h3>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <h4>Start Date</h4>
                        </Grid>
                        <Grid item xs={4}>
                            <h3>{formatDate(eventByIdData.startDate)}</h3>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <h4>Start Time</h4>
                        </Grid>
                        <Grid item xs={4}>
                            <h3>{eventByIdData.startTime}</h3>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <h4>End Date</h4>
                        </Grid>
                        <Grid item xs={4}>
                            <h3>{formatDate(eventByIdData.endDate)}</h3>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <h4>End Time</h4>
                        </Grid>
                        <Grid item xs={4}>
                            <h3>{eventByIdData.endTime}</h3>
                        </Grid>
                    </Grid>
                    <br></br>
                </div>}
            <h1>Locations Data</h1>
            <br></br>

        </div >
    );
}

export default ViewQuestionById;