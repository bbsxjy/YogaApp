import * as React from "react";
import {Calendar} from "../../components/Calendar.tsx";
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap';


interface SchedulerProps {
    category: number,
    id: number
}

export class SchedulerPage extends React.Component<SchedulerProps,{}> {

    render () {
        const event:Array = [
            {
                id: 1,
                title: 'event',
                start: '2017-08-18T10:30:00',
                end: '2017-08-18T16:30:00'
            }
        ];

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

                <Calendar events={event}/>
            </section>
        );
    }
}