import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import dateFormat from "dateformat";

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100vh',
};

function TrangChiTietNV(props) {
    const nv = props.nv;

    return (
        <div className="TrangChiTietNV">

            <h1>Chi tiết nhân viên</h1>
            <div className='container' >

                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{nv.name}</BreadcrumbItem>
                </Breadcrumb>

                <div style={styles}>
                    <Card style={{ width: '18rem' }}>

                        <Card.Img src={nv.image} />

                        <Card.Body>

                            <Card.Title>{nv.name}</Card.Title>
                            <Card.Text style={{ textAlign: "left" }}>Ngày vào công ty: {dateFormat(nv.startDate, "dd/mm/yyyy")}</Card.Text>
                            <Card.Text style={{ textAlign: "left" }}>Phòng ban: {nv.department.name}</Card.Text>
                            <Card.Text style={{ textAlign: "left" }}>Số ngày nghỉ còn lại: {nv.annualLeave} ngày</Card.Text>
                            <Card.Text style={{ textAlign: "left" }}>Số ngày đã làm thêm: {nv.overTime} ngày</Card.Text>
                        </Card.Body>

                    </Card>
                </div>


            </div>

        </div >
    );
}

export default TrangChiTietNV;