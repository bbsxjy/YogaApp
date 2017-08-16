import * as React from "react";

export class ErrorPage extends React.Component {
    render () {
        return (
            <section className="container">
                <h1>呀！页面出错啦！</h1>
                <h5>检查一下网址是不是输错啦？</h5>
            </section>
        );
    }
}