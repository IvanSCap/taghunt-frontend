import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControlLabel, RadioGroup } from '../../../node_modules/@mui/material/index';
import axios from '../../../node_modules/axios/index';
import commonurls from '../../commonurls';
import {useEffect, useState} from "react";


export default function QuestionsAdd() {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState([1, 2]); // Initial two answers
    const [questionTypes, setQuestionTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(""); // New state for selected question type

    const addAnswerField = () => {
        if (answers.length < 5) {
            setAnswers(answers => [...answers, answers.length + 1]);
        } else {
            alert("You cannot add more than 5 answers.");
        }
    };

    const handleSelectChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        function parseans(value) {
            let resp = 'false';
            if (value === 'on') {
                resp = 'true';
            }
            else {
                resp = 'false';
            }
            return resp;
        }
        const dynamicAnswers = answers.map(num => ({
            description: data.get(`ans${String(num).padStart(2, '0')}description`),
            true: parseans(data.get(`ans${String(num).padStart(2, '0')}radio`))
        }));

        const bodyParameters = {
            description: data.get('description'),
            questionType: selectedType,
            answers: dynamicAnswers
        };
        console.log(JSON.stringify(bodyParameters));
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }

        axios.post(commonurls.questionsurl, bodyParameters, config)
            .then((res) => {
                // showmsg("got some response");
                // showmsg(res.data)
                navigate('/account/questions');
            })
            .catch((error) => {
                // console.error(error)
            })
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(commonurls.questionsurl+ '/question-type', { headers: { 'Authorization': 'Bearer ' + token } })
            .then((response) => {
                setQuestionTypes(response.data);
            })
            .catch((error) => {
                // Handle the error here
                console.error("Error fetching question types:", error);
            });
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
                                label="Question"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel
                                id="question-type-label"
                                shrink={selectedType !== ""} // This will shrink the label only when an option is selected
                            >
                                {selectedType ? "Question Type" : ""}
                            </InputLabel>
                            <Select
                                labelId="question-type-label"
                                id="question-type"
                                value={selectedType || ""}
                                onChange={handleSelectChange}
                                displayEmpty
                                notched={selectedType !== ""} // This will notch the outline for the label when an option is selected
                            >
                                <MenuItem value="" disabled>
                                    Choose a question type
                                </MenuItem>
                                {questionTypes.map((type, index) => (
                                    <MenuItem key={index} value={type}>
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <br></br>
                    {answers.map((answer, index) => (
                        <Grid container spacing={3} key={index}>
                            <Grid item xs={10} sm={10}>
                                <TextField
                                    required
                                    id={`ans${String(answer).padStart(2, '0')}`}
                                    name={`ans${String(answer).padStart(2, '0')}description`}
                                    label={`Answer ${answer}`}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <FormControlLabel
                                    name={`ans${String(answer).padStart(2, '0')}radio`}
                                    control={<Switch />}
                                    label=""
                                />
                            </Grid>
                        </Grid>
                    ))}
                    <Button onClick={addAnswerField}>Add More Answers</Button>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>

                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                type="button"
                                variant='contained' >Cancel</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                type="submit"
                                variant='contained' >Add Question</Button>
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>
                </RadioGroup>
            </Box>

        </React.Fragment>
    );
}
