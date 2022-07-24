// {
//     id: 0,
//     name: "Nguyễn Văn A",
//     doB: "1999-01-01T08:59:00.000Z",
//     salaryScale: 1.1,
//     startDate: "2019-04-30T08:59:00.000Z",
//     department: DEPARTMENTS[0],
//     annualLeave: 1,
//     overTime: 1,
//     image: '/assets/images/alberto.png',
// },
import {
    // Breadcrumb,
    // BreadcrumbItem,
    // Button,
    Form,
    // FormGroup,
    // Label,
    // Input,
    // Col
} from 'reactstrap';

import React, { useState } from "react";
import { useRef } from "react"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Tạo ra Controlled Forms
function TrangTaoNhanVienMoi() {


    const [NhanVien, setNhanVien] = useState({
        id: "",
        name: "",
        doB: "",
        salaryScale: "",
        startDate: "",
        department: "",
        annualLeave: "",
        overTime: "",
        image: ""
    });




    // Xử lý quá trình nhập liệu
    const handleChange = (event) => {

        console.log('handleChange');
        event.persist();
        setNhanVien({
            ...NhanVien,
            [event.target.name]: event.target.value,
        });




    }


    // sử lý button
    const handleSubmit = (event) => {
        console.log('handleSubmit');
        console.log(NhanVien);
        event.preventDefault();


    }

    // const [errors, setErrors] = useState([]);

    // function validate() {
    //     const { email, password } = NhanVien;
    //     // we are going to store errors for all fields
    //     // in a signle array
    //     const errors = [];

    //     if (email.length < 5) {
    //         errors.push("Email should be at least 5 charcters long");
    //     }
    //     if (email.split("").filter((x) => x === "@").length !== 1) {
    //         errors.push("Email should contain a @");
    //     }
    //     if (email.indexOf(".") === -1) {
    //         errors.push("Email should contain at least one dot");
    //     }
    //     if (password.length < 6) {
    //         errors.push("Password should be at least 6 characters long");
    //     }
    //     return errors;
    // }


    // const tooltipText = `Tooltip for date: ${date}`;

    // const [startDate, setStartDate] = useState(new Date());

    const [shouldCloseCalendar, setShouldCloseCalendar] = useState(false)

    const ref = useRef()
    return (
        <div className="TrangTaoNhanVienMoi">

            <div className="container">
                <h1>Trang Tạo Nhân viên Mới</h1>
                <Form onSubmit={handleSubmit}>
                    <div>

                        <div>
                            <label>Họ và tên</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                // defaultValue={NhanVien.name}
                                // placeholder={NhanVien.name}
                                onChange={handleChange} />
                        </div>


                        <div>
                            <label>Ngày sinh</label>

                            <DatePicker
                                value={{}}
                                placeholder="first click here"
                                ref={ref}
                                onOpen={() => setShouldCloseCalendar(false)}
                                onClose={() => shouldCloseCalendar}
                            />



                            {/* <DatePicker
                                id="doB"
                                name="doB"
                                dateFormat="dd/MM/yyyy"
                                onChange={(date) => setStartDate(date)}
                                selected={startDate}
                            /> */}

                        </div>


















                    </div>

                    <button>Thêm nhân viên</button>




                </Form>

            </div>

        </div>
    );
}

export default TrangTaoNhanVienMoi;