
import { Form, } from 'reactstrap';
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import dateFormat from "dateformat";
import "react-datepicker/dist/react-datepicker.css";

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
                                onChange={handleChange} />
                        </div>

                        <div>
                            <label>Ngày sinh</label>
                            <DatePicker
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


                        <div>
                            <label style={{ float: "left" }} >Hệ số lương: </label>
                            <input
                                id="salaryScale"
                                name="salaryScale"
                                type="text"
                                onChange={handleChange} />
                        </div>

                        <div>
                            <label style={{ float: "left" }}>Ngày vào công ty</label>
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

                        <div>
                            <label>Chức vụ</label>

                            <select
                                id="doB"
                                name="doB"
                                // value="{this.state.age}"
                                onChange={handleChange}>

                                <option value="teen">Less than 18</option>
                                <option value="adult">18+</option>

                            </select>

                        </div>

                        <div>
                            <label>Số ngày nghỉ phép</label>
                            <input
                                id="annualLeave"
                                name="annualLeave"
                                type="text"
                                onChange={handleChange} />
                        </div>


                        <div>
                            <label>Số ngày làm thêm</label>
                            <input
                                id="overTime"
                                name="overTime"
                                type="text"
                                onChange={handleChange} />

                        </div>


                    </div>

                    <button>Thêm nhân viên</button>

                </Form>

            </div >

        </div >
    );
}

export default TrangTaoNhanVienMoi;