import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function TrangNhanVien(props) {

    const mang = props.dsnv.map((e) => {
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

    function timkiem() {

    }


    return (

        <div className="TrangNhanVien">
            <h1>Nhân viên</h1>
            <div className='container'>
                <div>
                    <input type="text" name="name" />
                    <button onClick={timkiem}>Tìm kiếm</button>
                </div>

                <div className='row'>
                    {mang}
                </div>

            </div>
        </div>
    );





}

export default TrangNhanVien;
