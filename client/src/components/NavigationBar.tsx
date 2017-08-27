import * as React from "react";
import * as ReactRouter from "react-router";
import * as Routes from "../routes.ts";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";

interface NavigationBarProps extends ReactRouter.RouteComponentProps<{}, {}> {
}

interface NavigationBarState {
    shrink: string
}

export class NavigationBar extends React.Component<NavigationBarProps, NavigationBarState> {
    constructor() {
        super();
        this.state = {
            shrink: ""
        };
    }

    componentDidMount() {
        addEventListener('scroll', this.listenScrollEvent.bind(this));
        this.setShrink();
    }

    componentWillUnmount() {
        removeEventListener('scroll', this.listenScrollEvent.bind(this));
    }

    componentWillReceiveProps() {
        this.setShrink();
    }

    listenScrollEvent() {
        this.setShrink();
    }

    setShrink() {
        const shrink = (pageYOffset <= 100 && location.pathname === "/") ?
            "" : "navbar-shrink";
        this.setState({
            shrink: shrink
        })
    }

    render() {
        return (
            <Navbar fixedTop inverse fluid id="mainNav" className={this.state.shrink}>

                <Navbar.Header>
                    <Link to={Routes.home}>
                        <Navbar.Brand>圣玛瑜伽</Navbar.Brand>
                    </Link>
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

                <Nav className="ml-auto collapse navbar-collapse navbar-right"
                     id="navbarResponsive">
                    <NavItem href="#" className="nav-link">课程表</NavItem>
                    <NavItem href="#" className="nav-link">预约课程</NavItem>
                    <NavItem href="#" className="nav-link">关于我们</NavItem>
                </Nav>

            </Navbar>
        );
    }
}