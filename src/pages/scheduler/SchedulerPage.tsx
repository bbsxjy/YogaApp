import * as React from "react";
import {Calendar} from "../../components/Calendar.tsx";

export class SchedulerPage extends React.Component {

    render () {
        const event:Array = [
            {
                id: '1',
                title: 'event1',
                start: '2017-08-18T10:30:00',
                end: '2017-08-18T16:30:00'
            },
            {
                id: '2',
                title: 'event2',
                start: '2017-08-17T10:30:00',
                end: '2017-08-17T16:30:00'
            }];
        return (
            <section>
                <Calendar events={event}/>
            </section>
        );
    }
}