import * as React from "react";
import {Calendar} from "../../components/Calendar.tsx";
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import * as Routes from "../../routes.ts";
import {Link} from "react-router-dom";
import * as query from 'query-string'
import axios from 'axios';
import {GetSchedulerSearchString} from "../../utils/Utils.tsx";
import {Id} from '../../utils/Interfaces.tsx'

interface SchedulerProps {
}

interface SchedulerStates {
    events: Array
}

export class SchedulerPage extends React.Component<SchedulerProps,SchedulerStates> {

    constructor(props) {
        super();
        this.state = {
            events: []
        }
    }
    componentWillMount(){
        axios.get('http://localhost:8081/api/course/get')
            .then(response => {
                const docs = response.data.documents;
                let events: Array = [];
                docs.forEach(function (value, index, array) {
                    let event = {
                        id: value.id,
                        title: value.name,
                        start: value.time.start,
                        end: value.time.end,
                        dow: value.time.repeatFor
                    };
                    events.push(event);
                });
                this.setState({
                    events: events
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentWillUpdate() {
        console.log(location.search);
    }

    render () {
        return (
            <section className="container">
                <Panel header="请选择下面的种类来查看课程表">
                    <ListGroup fill>

                        <ListGroupItem>
                            <ListGroup fill className="list-inline">
                                按授课老师：
                                <ListGroupItem className="borderless"><Link to={Routes.scheduler}>全部</Link></ListGroupItem>
                                <ListGroupItem className="borderless">
                                    <Link to={{
                                        pathname:'/scheduler',
                                        search: GetSchedulerSearchString(location.search, "teacher_id", "1")
                                    }}>
                                        孙老师
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className="borderless">
                                    <Link to={{
                                        pathname:'/scheduler',
                                        search: GetSchedulerSearchString(location.search, "teacher_id", "2")
                                    }}>
                                        王老师
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className="borderless">
                                    <Link to={{
                                        pathname:'/scheduler',
                                        search: GetSchedulerSearchString(location.search, "teacher_id", "3")
                                    }}>
                                        朱老师
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </ListGroupItem>

                        <ListGroupItem>
                            <ListGroup fill className="list-inline">
                                按课程名称：
                                <ListGroupItem className="borderless"><Link to={Routes.scheduler}>全部</Link></ListGroupItem>
                                <ListGroupItem className="borderless">
                                    <Link to={{
                                        pathname:'/scheduler',
                                        search: GetSchedulerSearchString(location.search, "course_id", "1")
                                    }}>
                                        空中瑜伽
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className="borderless">
                                    <Link to={{
                                        pathname:'/scheduler',
                                        search: GetSchedulerSearchString(location.search, "course_id", "2")
                                    }}>
                                        热力瑜伽
                                    </Link>
                                </ListGroupItem>
                                <ListGroupItem className="borderless">
                                    <Link to={{
                                        pathname:'/scheduler',
                                        search: GetSchedulerSearchString(location.search, "course_id", "3")
                                    }}>
                                        产孕瑜伽
                                    </Link>
                                </ListGroupItem>
                            </ListGroup>
                        </ListGroupItem>

                    </ListGroup>
                </Panel>

                <Calendar events={this.state.events}/>
            </section>
        );
    }
}