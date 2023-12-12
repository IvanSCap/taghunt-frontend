import AccountIndex from "../account/AccountIndex";
import LoginBox from "./partial/LoginBox";
import RegistrationPage from "./partial/RegistrationPage";

const HomeRouter = [
    {
        id: '1',
        name: 'Home',
        url: '/',
        element: <LoginBox />

    },
    {
        id: '2',
        name: 'Register',
        url: '/register',
        element: <RegistrationPage />

    },
    {
        id: '3',
        name: 'Admin',
        url: '/account/*',
        element: <AccountIndex />

    },
]
export default HomeRouter;