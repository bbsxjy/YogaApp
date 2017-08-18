import * as React from "react";
import $ from "jquery";
import "fullcalendar"
import {SeatsModal} from "./SeatsModal.tsx";

//Assign node as calendar dom node
let node = undefined;
interface CalendarProps {
    events: Array
}
interface CalendarState {
    className: string
}

export class Calendar extends React.Component<CalendarProps,CalendarState> {
    constructor() {
        super();
        this.state = {
            className: ""
        };
    }

    componentDidMount() {
        const that = (this);
        $(node).fullCalendar({
            locale: "zh-cn",
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            defaultView: 'agendaWeek',
            buttonText: {
                today: '今天',
                month: '月视图',
                week: '周视图',
                day: '日视图'
            },
            allDayText: "全天",
            navLinks: true, // can click day/week names to navigate views
            eventLimit: true, // allow "more" link when too many events
            //allow event call back
            eventClick: function(calEvent, jsEvent, view) {
                that.setState({
                    className: calEvent.title
                })
            }
        });
        $(node).fullCalendar('addEventSource', this.props.events);
    }

    render() {
        return (
            <div>
                <div id="calendar"
                     ref={el => node = el}
                     className="container">
                </div>
                <SeatsModal className={this.state.className}/>
            </div>
        );
    }
}