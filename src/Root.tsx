import * as React from "react";
import * as Routes from "./routes.ts";
import {Route, Router} from "react-router";
import createBrowserHistory from "history/createBrowserHistory";
import {MainLayout} from "./pages/MainLayout.tsx";

const browserHistory = createBrowserHistory();

export class Root extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={Routes.home}>
                    <Route exact path={Routes.home} component={MainLayout}/>
                </Route>
            </Router>
        );
    }
}