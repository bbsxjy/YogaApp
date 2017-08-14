import * as React from "react";

export class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <span className="copyright">版权所有 &copy; 圣玛瑜伽 2017</span>
                        </div>
                        <div className="col-md-4">
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
                        <div className="col-md-4">
                            <ul className="list-inline quicklinks">
                                <li className="list-inline-item">
                                    <a href="#">隐私政策</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">使用协议</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}