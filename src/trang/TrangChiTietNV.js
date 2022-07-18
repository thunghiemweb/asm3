import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';


function TrangChiTietNV(props) {
    const nv = props.nv;
    console.log(nv);

    return (
        <div className="TrangChiTietNV">
            <h1>Chi tiết nhân viên</h1>
            <Breadcrumb>
                <BreadcrumbItem><Link to="/">Nhân Viên</Link></BreadcrumbItem>
                <BreadcrumbItem active>About Us</BreadcrumbItem>
            </Breadcrumb>

            <Card >
                {/* <Card.Img src={nv.image} />
                <Card.Body>
                    <Card.Title>Họ và tên: {nv.name}</Card.Title>
                    <Card.Text>Ngày sinh: {nv.name}</Card.Text>
                    <Card.Text>Ngày vào công ty: {nv.name}</Card.Text>
                    <Card.Text>Phòng ban: {nv.name}</Card.Text>
                    <Card.Text>Số ngày nghỉ còn lại: {nv.name}</Card.Text>
                    <Card.Text>Số ngày đẵ làm thêm: {nv.name}</Card.Text>
                </Card.Body> */}
            </Card>
        </div>
    );
}

export default TrangChiTietNV;