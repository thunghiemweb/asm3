import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form,
    Row, Col, Label,
    FormFeedback
} from 'reactstrap';

// id: "",
// name: "",
// doB: "",
// salaryScale: "",
// startDate: "",
// department: "",
// annualLeave: "",
// overTime: "",
// image: "/assets/images/alberto.png",




class TrangThemNhanVien extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: true,
            id: '',
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: '',
            overTime: '',
            image: '',
            touched: {
                name: false,
                doB: false,
                salaryScale: false,
                startDate: false,
                department: false,
                annualLeave: false,
                overTime: false,

            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    // thay đổi nội dung cho vào state
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    // sự kiện bấm
    handleSubmit(event) {
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, telnum, email) {
        const errors = {
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: '',
            overTime: '',
        };

        if (this.state.touched.name && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }





    render() {

        const errors = this.validate(
            this.state.name,
            this.state.doB,
            this.state.salaryScale,
            this.state.startDate,
            this.state.department,
            this.state.annualLeave,
            this.state.overTime,
        );

        return (
            <div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Nhập thông tin của nhân viên mới</ModalHeader>
                    <ModalBody>

                        <Form onSubmit={this.handleSubmit}>

                            <Row className="form-group">
                                <Label htmlFor="firstname" md={3}>Họ và tên</Label>
                                <Col md={9}>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="nhập họ và tên"
                                        className="form-control"
                                        value={this.state.name}
                                        valid={errors.name === ''}
                                        invalid={errors.name !== ''}
                                        onBlur={this.handleBlur('name')}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.name}</FormFeedback>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="firstname" md={3}>First Name</Label>
                                <Col md={9}>
                                    <input
                                        label="Ngày sinh"
                                        name="doB"
                                        type="date"
                                        // value={value}
                                        className="form-control"
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>





                        </Form>






                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>

                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default TrangThemNhanVien;