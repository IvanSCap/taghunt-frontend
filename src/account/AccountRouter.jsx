import AddEvent from "./events/AddEvent";
import EditEvent from "./events/EditEvent";
import EventsIndex from "./events/EventsIndex";
import ViewEventById from "./events/ViewEventById";
import AccountDashboard from "./partial/AccountDashboard";
import QuestionsAdd from "./questions/QuestionAdd";
import QuestionsIndex from "./questions/QuestionsIndex";
import ViewQuestionById from "./questions/ViewQuestionById";
import ReportsIndex from "./reports/ReportsIndex";
import QuestionType from "./questions/QuestionType";
const AccountRouter = [
    {
        id: '1',
        name: 'Events',
        url: '/events',
        element: <EventsIndex />

    },
    {
        id: '2',
        name: 'Reports',
        url: '/reports',
        element: <ReportsIndex />

    },
    {
        id: '3',
        name: 'Questions',
        url: '/questions',
        element: <QuestionsIndex />

    },
    {
        id: '4',
        name: 'Account Home',
        url: '/',
        element: <AccountDashboard />

    },
    {
        id: '5',
        name: 'Add Event',
        url: '/events/add',
        element: <AddEvent />
    },
    {
        id: '6',
        name: 'Add Event',
        url: '/events/edit/:id',
        element: <EditEvent />
    },
    {
        id: '7',
        name: 'Add Event',
        url: '/events/viewevent/:id',
        element: <ViewEventById />
    },
    {
        id: '8',
        name: 'Add Question',
        url: '/questions/add',
        element: <QuestionsAdd />
    },
    {
        id: '8',
        name: 'Add Question',
        url: '/questions/question-type',
        element: <QuestionType />
    },
    {
        id: '9',
        name: 'Add Event',
        url: '/questions/viewquestionbyId/:id',
        element: <ViewQuestionById />
    },
]
export default AccountRouter;