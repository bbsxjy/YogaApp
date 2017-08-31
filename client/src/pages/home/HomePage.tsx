import * as React from "react";
import * as ReactRouter from "react-router";
import {Button} from "react-bootstrap"
import * as Routes from "../../routes.ts";
import {Link} from "react-router-dom";

interface HomeProps extends ReactRouter.RouteComponentProps<any, {}> {
}

export class HomePage extends React.Component<HomeProps, {}> {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container">
                        <div className="intro-text">
                            <div className="intro-lead-in">Life is all about Yoga</div>
                            <div className="intro-heading">圣玛瑜伽欢迎您</div>
                            <Link to={Routes.scheduler}>
                                <Button className="btn btn-xl" id="classButton">
                                    点我预约课程
                                </Button>
                            </Link>
                        </div>
                    </div>
                </header>

                <section className="bg-light" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading">我们的团队</h2>
                                <h3 className="section-subheading text-muted">Our Amazing Team</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img className="mx-auto img-circle" src="../../../assets/img/team/1.jpg" alt=""/>
                                    <h4>Kay Garland</h4>
                                    <p className="text-muted">Lead Designer</p>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-twitter"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-facebook"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-linkedin"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img className="mx-auto img-circle" src="../../../assets/img/team/2.jpg" alt=""/>
                                    <h4>Larry Parker</h4>
                                    <p className="text-muted">Lead Marketer</p>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-twitter"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-facebook"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-linkedin"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img className="mx-auto img-circle" src="../../../assets/img/team/3.jpg" alt=""/>
                                    <h4>Diana Pertersen</h4>
                                    <p className="text-muted">Lead Developer</p>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-twitter"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-facebook"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-linkedin"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}