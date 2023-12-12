import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControlLabel, RadioGroup } from '../../../node_modules/@mui/material/index';
import axios from '../../../node_modules/axios/index';
import commonurls from '../../commonurls';
import {useEffect, useState} from "react";


export default function QuestionType() {
    const navigate = useNavigate();
    const [questionTypes, setQuestionTypes] = useState([]);

    const handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const bodyParameters = {
            description: data.get('description'),
        };

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        axios.post(commonurls.questionsurl+`/question-type?type=${data.get("description")}`, bodyParameters, config)
            .then(() => {
                fetchQuestionTypes();
            })
            .catch((error) => {
                // console.error(error)
            })
    }

    const fetchQuestionTypes = () => {
        const token = localStorage.getItem('token');
        axios.get(commonurls.questionsurl+ '/question-type', { headers: { 'Authorization': 'Bearer ' + token } })
            .then((response) => {
                setQuestionTypes(response.data);
            })
            .catch((error) => {
                // Handle the error here
                console.error("Error fetching question types:", error);
            });
    }

    useEffect(() => {
        fetchQuestionTypes();
    }, []);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Add anstion
            </Typography>
            <Box component="form" onSubmit={handleSubmit} >
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="false"
                    name="radio-buttons-group"
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={11}>
                            <TextField
                                required
                                id="description"
                                name="description"
                                label="Question Type"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sx={{ mb: 2 }}>
                        <Button
                            type="submit"
                            variant='contained' >Add Question Type</Button>
                    </Grid>
                    <br></br>
                    <Grid container spacing={3} sx={{ mb: 2 }}>
                        <Typography sx={{ mb: 2 }}  variant="h6" gutterBottom>
                            Types:
                        </Typography>
                        <List>
                            {questionTypes.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>
                </RadioGroup>
            </Box>

        </React.Fragment>
    );
}
