import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '../../../node_modules/@mui/material/index';
import axios from '../../../node_modules/axios/index';
import moment from '../../../node_modules/moment/moment';
import { useParams } from "../../../node_modules/react-router-dom/dist/index";
import commonurls from '../../commonurls';
import { showmsg } from '../../Helper';
export default function EditEvent() {
    const [intialdata, setIntialdata] = React.useState(null);
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    let { id } = useParams();
    const [startDate, setStartDate] = React.useState(null);
    const [startTime, setStartTime] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [endTime, setEndTime] = React.useState(null);
    const [value, setValue] = useState();
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);
    const [file, setFile] = useState();
    function handleChange(e) {
        // showmsg(e.target.files);
        //setFile(URL.createObjectURL(e.target.files[0]));
    }
    useEffect(() => {
        showmsg("Get data for event id :" + id);
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        axios.get(commonurls.eventurls + "/" + id, config)
            .then((res) => {
                //showmsg("got some response");
                setFlag(true);
                setIntialdata(res.data);
                showmsg("Edit Event --response from api is :" + JSON.stringify(res.data));
                setEndDate(intialdata.endDate);
                setEndTime(intialdata.endTime);
            })
            .catch((error) => {
                // console.error(error)
            })
    }, []);
    let getDate = (value) => {
        //showmsg("Start Date :" + value);
        var numDate = new Date(value);
        let start_date_moment = moment(numDate, "ddd MMM DD YYYY HH:mm:ss ZZ")
        let req_format = start_date_moment.format("YYYY-MM-DD");
        //showmsg("date in format is :" + req_format);
        return req_format + "T00:00:00";
    }
    let getTime = (value) => {
        //showmsg("Start Time---- :" + value);
        var numDate = new Date(value);
        let start_date_moment = moment(numDate, "ddd MMM DD YYYY HH:mm:ss ZZ")
        let req_format = start_date_moment.format("HH:mm:ss");
        //showmsg("Time in format is :" + value);
        return req_format;

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const bodyParameters = {
            name: data.get('name'),
            address: data.get('address'),
            startDate: getDate(startDate),
            startTime: getTime(startTime),
            endDate: getDate(endDate),
            endTime: getTime(endTime),
            locationCount: data.get('locationCount'),
            image: null
        };
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        axios.put(commonurls.eventurls, bodyParameters, config)
            .then((res) => {
                // showmsg("got some response");
                // showmsg(res.data)
                navigate('/account/events');
            })
            .catch((error) => {
                // console.error(error)
            })

    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Update Event
            </Typography>
            <Box component="form" onSubmit={handleSubmit} >
                <Grid container spacing={3}>
                    <Grid item xs={10} sm={5}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Event Name"
                            fullWidth
                            value={flag && intialdata.name}
                        />
                    </Grid>

                    <Grid item xs={10} sm={5}>
                        <TextField
                            required
                            id="address"
                            name="address"
                            label="Address"
                            fullWidth
                            value={flag && intialdata.address}
                        />
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                required
                                id="startDate"
                                name="startDate"
                                label="Start Date"
                                value={startDate}
                                onChange={(newValue) => setStartDate(newValue)}
                                fullWidth

                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                required
                                id="startTime"
                                name="startTime"
                                label="Start Time"
                                value={startTime}
                                onChange={(newValue) => setStartTime(newValue)}
                                fullWidth
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                required
                                id="endDate"
                                name="endDate"
                                label="End Date"
                                value={endDate}
                                onChange={(newValue) => setEndDate(newValue)}
                                fullWidth
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={10} sm={5}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                required
                                id="endTime"
                                name="endTime"
                                label="End Time"
                                value={endTime}
                                onChange={(newValue) => setEndTime(newValue)}
                                fullWidth
                            />
                        </LocalizationProvider>
                    </Grid>

                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <input type="file" onChange={handleChange} />
                        <img src={file} />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            type="submit"
                            variant='contained' >Update Event</Button>
                    </Grid>
                </Grid>

            </Box>

        </React.Fragment>
    );
}