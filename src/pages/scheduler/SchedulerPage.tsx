import * as React from "react";
import {Calendar} from "../../components/Calendar.tsx";
import * as ReactRouter from "react-router";

interface SchedulerProps {
    category: number,
    id: number
}

export class SchedulerPage extends React.Component<SchedulerProps,{}> {

    render () {
        console.log(location.search);
        const event:Array = [
            {
                id: this.props.category,
                title: 'event' + this.props.id,
                start: '2017-08-18T10:30:00',
                end: '2017-08-18T16:30:00'
            }
        ];
        if (location.search){
            return (
                <section>
                    <Calendar events={event}/>
                </section>
            );
        } else{
            return (
                <section className="container">
                    <h1>你需要选择查看种类才能看到课表哦！</h1>
                </section>
            );
        }

    }
}