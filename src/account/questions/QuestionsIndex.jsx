import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../node_modules/@mui/material/index';
import ViewQuestions from './ViewQuestions';
function QuestionsIndex() {
    const navigate = useNavigate();
    const addQuestion = (event) => {
        navigate('/account/questions/add');
    };
    const addQuestionType = (event) => {
        navigate('/account/questions/question-type');
    };
    return (

        <div>
            <Button variant="contained" onClick={addQuestion} endIcon={<AddCircleIcon />}>
                Add Question
            </Button>
            <Button sx={{ ml: 2 }} variant="contained" onClick={addQuestionType} endIcon={<AddCircleIcon />}>
                Add Question Type
            </Button>
            <ViewQuestions />
        </div>
    );
}

export default QuestionsIndex;