import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
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

            <Card className="footer">

                <Card.Body>
                    <Card.Img src={nv.image} />
                    <Card.Title>Họ và tên: {nv.name}</Card.Title>
                    <Card.Text>Ngày sinh:{dateFormat(nv.doB, "dd/mm/yyyy")}</Card.Text>
                    <Card.Text>Ngày vào công ty: {dateFormat(nv.startDate, "dd/mm/yyyy")}</Card.Text>
                    <Card.Text>Phòng ban: {nv.department.name}</Card.Text>
                    <Card.Text>Số ngày nghỉ còn lại: {nv.annualLeave}</Card.Text>
                    <Card.Text>Số ngày đẵ làm thêm: {nv.overTime}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TrangChiTietNV;