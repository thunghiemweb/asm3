import React from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Form,
    Row, Col, Label,
    FormFeedback,
    Input,

} from 'reactstrap';

class TrangThemNhanVien extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: true,
            id: '',
            name: '',
            doB: '',
            salaryScale: 1,
            startDate: '',
            department: '',
            annualLeave: 0,
            overTime: 0,
            image: '/assets/images/alberto.png',

            // Lưu trạng thái đã bấm click vào input chưa
            // Nếu bẩm vào rồi sẽ chuyển sang true nhờ hàm handleBlur
            touched: {
                name: false,
                doB: false,
                salaryScale: false,
                startDate: false,
                department: false,
                annualLeave: false,
                overTime: false,

            },

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.toggle = this.toggle.bind(this);

        console.log(props);



    }


    // Ẩn hiện cửa sổ  modal
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    // thay đổi nội dung cho vào state
    handleInputChange(event) {
        const target = event.target;
        // Đối với checkbox
        const value = target.type === 'checkbox' ? target.checked : target.value;

        const name = target.name;

        // console.log(name + ":" + value);

        this.setState({
            [name]: value
        });

    }

    // sự kiện bấm button
    handleSubmit(event) {
        // console.log(event);

        // Lấy danh sách nhân viên lưu trong bộ nhớ
        const STAFFS = JSON.parse(localStorage.getItem("dsnv"));

        console.log(this.state.department);

        // // Thêm phần tử mới
        STAFFS.push({
            id: STAFFS.length + 1,
            name: this.state.name,
            doB: this.state.doB,
            salaryScale: this.state.salaryScale,
            startDate: this.state.startDate,
            department: this.state.department,
            annualLeave: this.state.annualLeave,
            overTime: this.state.overTime,
            image: '/assets/images/alberto.png',
        });

        // Lưu lại
        localStorage.setItem("dsnv", JSON.stringify(STAFFS));

        //console.log(JSON.parse(localStorage.getItem("dsnv")));





        alert('Current State is: ' + JSON.stringify(this.state));

        event.preventDefault();
    }

    // Xử lý thông báo lỗi từng dòng input
    handleBlur = (field) => (evt) => {

        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(name, doB, salaryScale, startDate, department, annualLeave, overTime) {
        const errors = {
            name: '',
            doB: '',
            salaryScale: '',
            startDate: '',
            department: '',
            annualLeave: '',
            overTime: '',
        };


        // Chỉ validate khi đã click lần đầu vào inputs
        if (this.state.touched.name && name.length < 2)
            errors.name = 'Yêu cầu nhập nhiều hơn 2 ký tự';
        else if (this.state.touched.name && name.length > 30)
            errors.name = 'Họ và tên nhỏ hơn 30 ký tự';

        if (this.state.touched.doB && doB === '')
            errors.doB = "Yêu cầu nhập";

        if (this.state.touched.salaryScale && salaryScale <= 0)
            errors.salaryScale = "Hệ số lương phải lớn hơn 0";

        if (this.state.touched.startDate && startDate === '')
            errors.startDate = "Ngày vào công ty không được để trống";

        if (this.state.touched.department && department === "") {
            errors.department = "Nhập thiếu chức vụ";
        }



        if (this.state.touched.annualLeave && annualLeave < 0)
            errors.annualLeave = "Số ngày nghỉ còn lại không hợp lệ";

        if (this.state.touched.overTime && overTime < 0)
            errors.overTime = "Số ngày làm thêm không hợp lệ";

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
                                        // pattern="[0-9*]"
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

                                    <select
                                        className="form-control"
                                        name='department'
                                        value={this.state.department}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur('department')}
                                    >
                                        {this.props.chucvu.map((option, index) => (
                                            <option
                                                key={index}
                                                value={option.id}
                                            >
                                                {option.name}
                                            </option>
                                        ))}

                                    </select>
                                    {/* FormFeedback không hoạt động ở đây ??? */}
                                    {/* <FormFeedback>{errors.department}</FormFeedback> */}
                                    <p style={{ color: "red" }}>{errors.department}</p>

                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="annualLeave" md={5}>Số ngày nghỉ còn lại</Label>
                                <Col md={7}>
                                    <Input
                                        label="annualLeave"
                                        name="annualLeave"
                                        type="number"
                                        // pattern="[0-9*]"
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
                                        // pattern="[0-9*]"
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

                            <ModalFooter>
                                <Button type="submit" color="primary" onClick={this.toggle}>Thêm</Button>
                                {/* <Button name="huy" type="submit" color="secondary" onClick={this.toggle}>Hủy</Button> */}
                            </ModalFooter>

                        </Form>

                    </ModalBody>

                </Modal>
            </div >
        );
    }
}

export default TrangThemNhanVien;