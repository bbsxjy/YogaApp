import * as React from "react";
import {Button, Modal} from "react-bootstrap";
import {Moment} from "moment";

interface SeatsModalProps {
    className: string,
    classId: number,
    classTime: number
}
interface SeatsModalState {
    showModal: boolean
}
export class SeatsModal extends React.Component<SeatsModalProps,SeatsModalState> {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal() {
        this.setState({
            showModal: false
        });
    }
    //todo: find a better way to resolve the issue that if props change model pops out
    componentWillReceiveProps() {
        if (this.props.className){
            this.setState({
                showModal: true
            })
        } else {
            this.setState({
                showModal: false
            })
        }
    }
    render () {
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header>
                        <Modal.Title>{this.props.className}课程选座助手</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        这里是课堂座位表，请点选希望坐下的地方
                        <p>id={this.props.classId}{this.props.classTime}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary">
                            确认
                        </Button>
                        <Button onClick={this.closeModal}>
                            关闭
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}