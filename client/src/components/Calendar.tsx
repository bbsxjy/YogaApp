import * as React from "react";
import $ from "jquery";
import "fullcalendar"
import {SeatsModal} from "./SeatsModal.tsx";
import {Moment} from "moment"

//Assign node as calendar dom node
let node = undefined;
interface CalendarProps {
    events: Array
}
interface CalendarState {
    className: string,
    classId: number,
    classTime: number
}

export class Calendar extends React.Component<CalendarProps,CalendarState> {
    constructor(props) {
        super(props);
        this.state = {
            className: "",
            classId: 0,
            classTime: 0
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
            businessHours: {
                // days of week. an array of zero-based day of week integers (0=Sunday)
                dow: [ 1, 2, 3, 4, 5 ], // Monday - Thursday
                start: '9:00', // a start time (10am in this example)
                end: '21:00', // an end time (6pm in this example)
            },
            minTime: "08:00:00",
            maxTime: "22:00:00",
            //allow event call back
            eventClick: function(calEvent, jsEvent, view) {
                that.setState({
                    className: calEvent.title,
                    classId: calEvent.id,
                    classTime: calEvent.start.toDate().getTime()
                })
            }
        });
    }

    componentDidUpdate () {
        $(node).fullCalendar('removeEvents');
        $(node).fullCalendar('addEventSource', this.props.events);
        $(node).fullCalendar('refetchEvents');
        $(node).fullCalendar('refetchEvents');
    }

    render() {
        return (
            <div>
                <div id="calendar"
                     ref={el => node = el}/>
                <SeatsModal className={this.state.className}
                            classId={this.state.classId}
                            classTime={this.state.classTime}/>
            </div>
        );
    }
}

