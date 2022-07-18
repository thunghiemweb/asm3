import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useState } from "react";

function TrangBangLuong(props) {

    const [BangLuong, setBangLuong] = useState(props);

    const mang = BangLuong.dsnv.map((e) => {
        return (
            <div key={e.id} className="col-12 col-sm-6 col-md-4 " >
                <div style={{ padding: "30px" }}>
                    <h5>{e.name}</h5>
                    <p style={{ textAlign: "left" }}>Mã nhân viên:{e.id}</p>
                    <p style={{ textAlign: "left" }}>Hệ số lương:{e.salaryScale}</p>
                    <p style={{ textAlign: "left" }}>Số ngày làm thêm:{e.overTime}</p>
                    <h6 >Lương: {new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(3000000 * e.salaryScale + 200000 * e.overTime)}</h6>
                </div>
            </div>
        );
    });



    const objectComparisonCallback = (A, B) => {
        if (A.annualLeave < B.annualLeave) {
            return -1
        }

        if (A.annualLeave > B.annualLeave) {
            return 1
        }
        return 0
    }

    function caodenthap() {
        alert('cao den thap');
        console.log(BangLuong);
        setBangLuong(BangLuong.sort(objectComparisonCallback));
    }



    return (
        <div className="TrangBangLuong">
            <h1>Bảng lương</h1>

            {/* sắp xếp lương từ cao đến thấp */}

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
