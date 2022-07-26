import {
    Form,

} from 'reactstrap';
import React, { useState } from "react";

import DatePicker from "react-datepicker";
import dateFormat from "dateformat";

import "react-datepicker/dist/react-datepicker.css";

const StyleDiv = {

    maxWidth: "300px",
    margin: 'auto',
    padding: '10px',
    alignItems: 'center',
    border: '3px solid #73AD21',
    backgroundColor: 'powderblue'
};

const divText = {
    textAlign: 'left',
};


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
        image: "/assets/images/alberto.png",
    });


    // Xử lý quá trình nhập liệu
    const handleChange = (event) => {

        const NhanVienMoi = NhanVien;
        NhanVienMoi.doB = dateFormat(startDate, "dd/mm/yyyy");
        const key = event.target.name;

        if (key === "name") {
            NhanVienMoi.name = event.target.value;
        }

        if (key === "salaryScale") {
            NhanVienMoi.salaryScale = event.target.value;
        }

        setNhanVien(NhanVienMoi);
        console.log(NhanVien);
        event.persist();

    }


    // sử lý button
    const handleSubmit = (event) => {

        event.preventDefault();
    }


    const [startDate, setStartDate] = useState(new Date());


    return (
        <div className="TrangTaoNhanVienMoi">

            <div className="input-container">
                <h1>Trang Tạo Nhân viên Mới</h1>

                <Form onSubmit={handleSubmit}>

                    <div style={StyleDiv}>
                        <p style={divText}>Họ và tên: </p>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={handleChange} />
                    </div>


                    <div style={StyleDiv}>
                        <p style={divText}>Ngày sinh</p>
                        <DatePicker

                            style={{ width: "100%" }}
                            wrapperClassName="date-picker"
                            id="doB"
                            name="doB"
                            dateFormat="dd/MM/yyyy"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)
                            }

                            value={startDate}
                        />

                    </div>

                    <div style={StyleDiv}>
                        <p style={divText}>Hệ số lương: </p>
                        <input
                            id="salaryScale"
                            name="salaryScale"
                            type="text"
                            onChange={handleChange} />
                    </div>




                    <div style={StyleDiv}>
                        <p style={divText}>Ngày vào công ty</p>

                        <DatePicker
                            id="doB"
                            name="doB"
                            dateFormat="dd/MM/yyyy"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)
                            }

                            value={startDate}
                        />

                    </div>

                    <div style={StyleDiv}>
                        <p style={divText}>Chức vụ</p>

                        <select
                            id="doB"
                            name="doB"
                            onChange={handleChange}
                            style={{ width: '190px' }}

                        >

                            <option
                                value="teen">Less than 18</option>
                            <option value="adult">18+</option>

                        </select>
                    </div>

                    <div style={StyleDiv}>
                        <p style={divText}>Số ngày nghỉ phép</p>
                        <input
                            id="annualLeave"
                            name="annualLeave"
                            type="text"
                            onChange={handleChange} />
                    </div>


                    <div style={StyleDiv}>
                        <p style={divText}>Số ngày làm thêm</p>
                        <input
                            id="overTime"
                            name="overTime"
                            type="text"
                            onChange={handleChange} />

                    </div>


                    <button>Thêm nhân viên</button>




                </Form>

            </div >

        </div >
    );
}

export default TrangTaoNhanVienMoi;