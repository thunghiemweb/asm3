
import Card from 'react-bootstrap/Card';

function TrangPhongBan(props) {
    const mangnv = props.nv;

    const mang = props.chucvu.map((e) => {
        return (
            <div key={e.id} className="col-6 col-sm-4 col-md-2 ">
                <Card >
                    <Card.Body>
                        <Card.Title>{e.name}</Card.Title>
                        <Card.Text> Số lượng nhân viên: {mangnv.filter(x => x.department.name === e.name).length}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    });



    return (
        <div className="TrangPhongBan">
            <h1>Phòng ban</h1>

            <div className='container'>
                <div className='row'>
                    {mang}
                </div>
            </div>

        </div>
    );
}

export default TrangPhongBan;
