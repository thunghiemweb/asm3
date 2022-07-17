import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function TrangNhanVien(props) {

    const mang = props.nv.map((e) => {
        return (
            <div key={e.id} className="col-6 col-sm-4 col-md-2 ">
                <Card >
                    <Link to={'staffs/' + e.id}><Card.Img src={e.image} /></Link>
                    <Card.Body>
                        <Card.Text>{e.name}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    });

    return (

        <div className="TrangNhanVien">
            <h1>Nhân viên</h1>
            <div className='container'>
                <div className='row'>
                    {mang}
                </div>
            </div>
        </div>
    );
}

export default TrangNhanVien;
