import {
    Route, Routes
} from "react-router-dom";
import { Grid } from '../../node_modules/@mui/material/index';
import AccountRouter from './AccountRouter';
import AccountHeader from './partial/AccountHeader';
import AccountLeftMenu from './partial/AccountLeftMenu';

function AccountIndex() {
    const routers = AccountRouter.map((paths) =>
        <Route key={paths.id} path={paths.url} element={paths.element}></Route>);
    return (
        <div>
            <AccountHeader />
            <Grid container spacing={0}>
                <Grid item xs={2}>
                    <br />
                    <br />
                    <AccountLeftMenu />
                </Grid>
                <Grid item xs={10}>
                    <br></br>
                    <div>
                        <Routes>
                            {routers}
                        </Routes>
                    </div>
                </Grid>

            </Grid>

        </div>
    );
}

export default AccountIndex;