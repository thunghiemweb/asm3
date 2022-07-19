import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from "react";

function TrangBangLuong(props) {

    const [dsnv, setdsnv] = useState(props.dsnv);

    const mang = dsnv.map((e) => {
        return (
            <div key={e.id} className="col-12 col-sm-6 col-md-4 " >
                <div style={{ padding: "30px" }}>
                    <h5>{e.name}</h5>
                    <p style={{ textAlign: "left" }}>Mã nhân viên:{e.id}</p>
                    <p style={{ textAlign: "left" }}>Hệ số lương:{e.salaryScale}</p>
                    <p style={{ textAlign: "left" }}>Số ngày làm thêm:{e.overTime}</p>
                    <h6 >Lương: {new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(tinhluong(e))}</h6>
                </div>
            </div>
        );
    });


    function caodenthap() {
        alert('Đã sắp xếp lương từ cao đền thấp');
        setdsnv(dsnv.sort((a, b) => tinhluong(b) - tinhluong(a)));
    }
    function thapdencao() {
        alert('Đã xắp sếp lương từ thấp đến cao');
        setdsnv(dsnv.sort((a, b) => tinhluong(a) - tinhluong(b)));
    }

    function tinhluong(e) {
        return 3000000 * e.salaryScale + 200000 * e.overTime;
    }



    return (
        <div className="TrangBangLuong">
            <h1>Bảng lương</h1>

            {/* sắp xếp lương từ cao đến thấp */}

            <button onClick={thapdencao}>Sắp xếp lương từ thấp đến cao</button>
            <button onClick={caodenthap}>Sắp xếp lương từ cao đến thấp</button>

            <div className='container'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                </Breadcrumb>

                <div className='row'>
                    {mang}
                </div>
            </div>

        </div>
    );
}

export default TrangBangLuong;
