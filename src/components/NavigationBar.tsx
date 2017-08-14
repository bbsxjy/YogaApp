import * as React from "react";
import * as ReactRouter from "react-router";
import * as Routes from "../routes.ts";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

interface NavigationBarProps extends ReactRouter.RouteComponentProps<any, {}> {
}

export class NavigationBar extends React.Component<NavigationBarProps, {}> {
    render() {
        return (
            <Navbar fixedTop inverse fluid id="mainNav">

                <Link to={Routes.home}>
                    <Navbar.Header>
                        <Navbar.Brand>圣玛瑜伽</Navbar.Brand>
                        <Navbar.Toggle data-toggle="collapse"
                                       data-target="#navbarResponsive"
                                       aria-controls="navbarResponsive"
                                       aria-expanded="false"
                                       aria-label="Toggle navigation"
                                       className="navbar-toggler-right">
                            菜单
                            <i className="fa fa-bars"/>
                        </Navbar.Toggle>
                    </Navbar.Header>
                </Link>

                <Nav className="ml-auto collapse navbar-collapse navbar-right"
                     id="navbarResponsive">
                    <NavItem href="#">课程表</NavItem>
                    <NavItem href="#">预约课程</NavItem>
                    <NavItem href="#">关于我们</NavItem>
                </Nav>

            </Navbar>
        );
    }
}