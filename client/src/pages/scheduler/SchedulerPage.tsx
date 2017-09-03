import * as React from "react";
import {Calendar} from "../../components/Calendar.tsx";
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';
import axios from 'axios';

interface SchedulerProps {
}

interface SchedulerStates {
    events: Array
}

export class SchedulerPage extends React.Component<SchedulerProps,SchedulerStates> {

    constructor() {
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

    render () {
        return (
            <section className="container">
                <Panel header="请选择下面的种类来查看课程表">
                    <ListGroup fill>

                        <ListGroupItem>
                            <ListGroup fill className="list-inline">
                                按授课老师：
                                <ListGroupItem className="borderless"><a>全部</a></ListGroupItem>
                                <ListGroupItem className="borderless"><a>孙老师</a></ListGroupItem>
                                <ListGroupItem className="borderless"><a>王老师</a></ListGroupItem>
                                <ListGroupItem className="borderless"><a>小琴老师</a></ListGroupItem>
                            </ListGroup>
                        </ListGroupItem>

                        <ListGroupItem>
                            <ListGroup fill className="list-inline">
                                按课程名称：
                                <ListGroupItem className="borderless"><a>全部</a></ListGroupItem>
                                <ListGroupItem className="borderless"><a>阿诗汤加</a></ListGroupItem>
                                <ListGroupItem className="borderless"><a>空中瑜伽</a></ListGroupItem>
                                <ListGroupItem className="borderless"><a>产孕瑜伽</a></ListGroupItem>
                            </ListGroup>
                        </ListGroupItem>

                    </ListGroup>
                </Panel>

                <Calendar events={this.state.events}/>
            </section>
        );
    }
}