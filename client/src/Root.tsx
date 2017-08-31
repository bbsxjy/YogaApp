import * as React from "react";
import * as Routes from "./routes.ts";
import {Route, Router,Switch} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import {MainLayout} from "./pages/MainLayout.tsx";
import {HomePage} from "./pages/home/HomePage.tsx";
import {SchedulerPage} from "./pages/scheduler/SchedulerPage.tsx";
import {ErrorPage} from "./pages/error/ErrorPage.tsx";

const browserHistory = createBrowserHistory();

export class Root extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <MainLayout>
                    <Switch>
                        <Route exact path={Routes.home} component={HomePage}/>
                        <Route path={Routes.scheduler} component={SchedulerPage}/>
                        <Route path="*" component={ErrorPage}/>
                    </Switch>
                </MainLayout>
            </Router>
        );
    }
}