import * as React from "react";
import {Calendar} from "../../components/Calendar.tsx";

export class SchedulerPage extends React.Component {

    render () {
        const event:Array = [
            {
                title: 'Conference',
                start: '2017-08-17',
                end: '2017-08-29'
            }];
        return (
            <section>
                <Calendar events={event}/>
            </section>
        );
    }
}