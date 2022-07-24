import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useRef } from 'react'


function TrangNhanVien(props) {

    const [ListNhanVien, setListNhanVien] = useState(props.dsnv);



    // hàm này trả về nhân viên phù hợp
    function TimText(a, b) {
        if (b.name.toLowerCase().search(a.toLowerCase()) !== -1)
            return b;
    }



    const TimNhanVien = (nv) => {
        setListNhanVien(props.dsnv.filter((e) => TimText(nv, e)));
    }

    const HienThiListNhanVien = ListNhanVien.map((e) => {
        return (
            <div key={e.id} className="col-6 col-sm-4 col-md-2 ">
                <Card >
                    <Link to={'staffs/' + e.id} >
                        <Card.Img src={e.image}

                            // Gửi đối tượng nhân viên được click đến App.js
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


    const inputRef = useRef(null);

    const handleSubmit = () => {
        TimNhanVien(inputRef.current.value);
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
