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
