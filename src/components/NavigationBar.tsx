import * as React from "react";
import * as ReactRouter from "react-router";
import * as Routes from "../routes.ts";
import {Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

interface NavigationBarProps extends ReactRouter.RouteComponentProps<any, {}> {
}

export class NavigationBar extends React.Component<NavigationBarProps, {}> {
    render() {
        return (
            <Navbar fixedTop inverse fluid>
                <Link to={Routes.home}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            This is brand
                        </Navbar.Brand>
                    </Navbar.Header>
                </Link>
            </Navbar>
        );
    }
}