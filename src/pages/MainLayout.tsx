import * as React from "react";
import {NavigationBar} from "../components/NavigationBar.tsx";

export class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar {...this.props}/>
                <div className="page-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}