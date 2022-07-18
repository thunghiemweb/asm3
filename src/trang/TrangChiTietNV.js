import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import dateFormat from "dateformat";


function TrangChiTietNV(props) {
    //console.log(props);
    const nv = props.nv;

    return (
        <div className="TrangChiTietNV">
            <h1>Chi tiết nhân viên</h1>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Nhân Viên</Link></BreadcrumbItem>
                <BreadcrumbItem active>{nv.id}</BreadcrumbItem>
            </Breadcrumb>

            <div className='container'>
                <div className="col-12 col-sm-4 col-md-3 "
                    style={{ float: "left", height: "100%" }}>
                    <img src={nv.image} alt="anh nv" style={{ height: "80%", width: "80%" }} />

                </div>
                <div className="col-12 col-sm-8 col-md-9 "
                    style={{ textAlign: "left", lineHeight: ".2", height: "100%", fontSize: "14px" }}>

                    <h4>Họ và tên: {nv.name}</h4>
                    <p >Ngày vào công ty: {dateFormat(nv.startDate, "dd/mm/yyyy")}</p>
                    <p>Phòng ban: {nv.department.name}</p>
                    <p>Số ngày nghỉ còn lại: {nv.annualLeave}</p>
                    <p>Số ngày đẵ làm thêm: {nv.overTime}</p>

                </div>












            </div>




        </div >
    );
}

export default TrangChiTietNV;