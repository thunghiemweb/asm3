import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form,
    Row, Col, Label,
    FormFeedback,
    Input,
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
            annualLeave: 0,
            overTime: 0,
            image: '/assets/images/alberto.png',
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
        console.log(event);
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name, doB, salaryScale) {
        const errors = {
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: '',
            overTime: '',
        };

        if (this.state.touched.name && name.length < 3)
            errors.name = 'Họ và tên cần nhiều hơn 3 ký tự';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Họ và tên nhỏ hơn 30 ký tự';

        if (this.state.touched.doB)
            errors.doB = "Ngày sinh không được để trống";

        if (this.state.touched.salaryScale > 0)
            errors.salaryScale = "Hệ số lương không được để trống";

        if (this.state.touched.startDate)
            errors.startDate = "Ngày vào công ty không được để trống";


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
                                <Label htmlFor="name" md={5}>Họ và tên</Label>
                                <Col md={7}>
                                    <Input
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
                                <Label htmlFor="doB" md={5}>Ngày sinh</Label>
                                <Col md={7}>
                                    <Input
                                        label="doB"
                                        name="doB"
                                        type="date"
                                        className="form-control"
                                        value={this.state.doB}
                                        valid={errors.doB === ''}
                                        invalid={errors.doB !== ''}
                                        onBlur={this.handleBlur('doB')}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.doB}</FormFeedback>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="salaryScale" md={5}>Hệ số lương</Label>
                                <Col md={7}>
                                    <Input
                                        label="salaryScale"
                                        name="salaryScale"
                                        type="number"
                                        pattern="[0-9*]"
                                        className="form-control"
                                        value={this.state.salaryScale}
                                        valid={errors.salaryScale === ''}
                                        invalid={errors.salaryScale !== ''}
                                        onBlur={this.handleBlur('salaryScale')}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.salaryScale}</FormFeedback>
                                </Col>
                            </Row>


                            <Row className="form-group">
                                <Label htmlFor="startDate" md={5}>Ngày vào công ty</Label>
                                <Col md={7}>
                                    <Input
                                        label="startDate"
                                        name="startDate"
                                        type="date"
                                        className="form-control"
                                        value={this.state.startDate}
                                        valid={errors.startDate === ''}
                                        invalid={errors.startDate !== ''}
                                        onBlur={this.handleBlur('startDate')}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.startDate}</FormFeedback>
                                </Col>
                            </Row>


                            <Row className="form-group">
                                <Label htmlFor="department" md={5}>Chức vụ</Label>
                                <Col md={7}>
                                    <select className="form-control">

                                        <option selected value="Sale">Sale</option>

                                        <option value="HR">HR</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="IT">IT</option>
                                        <option value="Finance">Finance</option>

                                    </select>
                                    <FormFeedback>{errors.department}</FormFeedback>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="annualLeave" md={5}>Số ngày nghỉ còn lại</Label>
                                <Col md={7}>
                                    <Input
                                        label="annualLeave"
                                        name="annualLeave"
                                        type="number"
                                        pattern="[0-9*]"
                                        className="form-control"
                                        value={this.state.annualLeave}
                                        valid={errors.annualLeave === ''}
                                        invalid={errors.annualLeave !== ''}
                                        onBlur={this.handleBlur('annualLeave')}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                                </Col>
                            </Row>


                            <Row className="form-group">
                                <Label htmlFor="overTime" md={5}>Số ngày làm thêm</Label>
                                <Col md={7}>
                                    <Input
                                        label="overTime"
                                        name="overTime"
                                        type="number"
                                        pattern="[0-9*]"
                                        className="form-control"
                                        value={this.state.overTime}
                                        valid={errors.overTime === ''}
                                        invalid={errors.overTime !== ''}
                                        onBlur={this.handleBlur('overTime')}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.overTime}</FormFeedback>
                                </Col>
                            </Row>






                        </Form>






                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary" onClick={this.toggle}>Do Something</Button>

                        <Button type="submit" color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default TrangThemNhanVien;