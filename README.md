# Bài asm3

Các tình huống sử dụng

Tình huống 1: Sử dụng chức năng tìm kiếm nhân viên bằng tên nhân viên thành công sử dụng uncontrolled form.

Tình huống 2: Sử dụng chức năng thêm nhân viên sử dụng controlled form .

Tình huống 3: Xác thực dữ liệu biểu mẫu (validate form) trong chức năng thêm nhân viên sử dụng controlled form.


Sử dụng chức năng thêm nhân viên và chuẩn hoá dữ liệu (validate) form sử dụng react-redux-form.

# controlled
import React, { useState } from "react";

function App (props) {
    const [message, updateMessage] = useState("");
    
    return (
        <div className="App" style={{ height: "20px" }}>
        <div className="container">
            <input
            type="text"
            placeholder="Enter message here.."
            value={message}
            onChange={(event) => updateMessage(event.target.value)}
            />
            <p>the message is: {message}</p>
        </div>
        </div>
    );
    };
export default App;

# uncontrolled

import { useRef } from "react";
    const NameForm = () => {
      const inputRef = useRef(null);
      const handleSubmit = () => {
      alert(inputRef.current.value);
      };
      return (
      <div>
        <input type="text" placeholder="Type..." ref={inputRef} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      );
    };
    export default NameForm;


# validate

import { useState } from "react";
import "./styles.css";

export default function App() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);

  /// add function when value change
  const handleChange = (event) => {
    event.persist();

    setValues({ ...values, [event.target.name]: event.target.value });
  };

  function validate() {
    const { email, password } = values;
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];

    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }
    return errors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    // submit the data...
  };

  const stringJson = JSON.stringify(values);
  return (
    <div className="App">
      {errors.map((error) => (
        <p key={error}>Error: {error}</p>
      ))}
      <h1>giới thiệu form react</h1>
      <form onSubmit={handleSubmit}>
        <p>nhập email:</p>
        <input
          name="email"
          type="text"
          defaultValue={values.email}
          onChange={handleChange}
        />
        <p>nhập password:</p>
        <input
          name="password"
          type="text"
          defaultValue={values.password}
          onChange={handleChange}
        />
        <p>bấm submit form</p>
        <button>submit nè</button>
      </form>
      <div className="show-json-string-setValues">{stringJson}</div>
    </div>
  );
}





import React from "react";
import { Controller, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("dateInput"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="dateInput"
        render={({ field }) => (
          <DatePicker
            placeholderText="Select date"
            onChange={(date) => field.onChange(date)}
            selected={field.value}
          />
        )}
      />
      {errors.dateInput && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
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




//--------------------------------------------------------------





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

                    <div >

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