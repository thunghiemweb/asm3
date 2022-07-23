import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from "react";


function TrangNhanVien(props) {

    const listNV = props.dsnv;

    const HienThiListNhanVien = listNV.map((e) => {
        return (
            <div key={e.id} className="col-6 col-sm-4 col-md-2 ">
                <Card >
                    <Link to={'staffs/' + e.id} >
                        <Card.Img src={e.image}
                            onClick={() => props.ChonNV(e)}
                        />
                    </Link>

                    <Card.Body>
                        <Card.Text>{e.name}</Card.Text>
                    </Card.Body>

                </Card>
            </div>
        );
    });




    const inputRef = useState(null);

    const handleSubmit = () => {
        alert("Không tìm thấy " + inputRef.current.value);
    };




    return (

        <div className="TrangNhanVien">
            <h1>Nhân viên</h1>
            <div className='container'>

                {/* Tìm kiếm nhân viên */}
                <div style={{ margin: "10px" }}>

                    <input
                        style={{ margin: "10px" }}
                        type="text"
                        placeholder="Type..."
                        ref={inputRef}
                    />
                    <button
                        style={{ margin: "10px" }}
                        onClick={handleSubmit}>
                        Tìm kiếm</button>

                </div>




                {/* Hiển thị danh sách nhan vien */}

                <div className='row'>
                    {HienThiListNhanVien}
                </div>

            </div>
        </div>
    );





}

export default TrangNhanVien;
