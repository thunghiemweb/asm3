function TrangBangLuong(props) {
    const lcb = 3000000;

    const mang = props.nv.map((e) => {
        return (
            <div key={e.id} className="col-6 col-sm-4 col-md-2 ">
                <div style={{ padding: "30px" }}>
                    <h5>{e.name}</h5>
                    <p style={{ textAlign: "left" }}>Mã nhân viên:{e.id}</p>
                    <p style={{ textAlign: "left" }}>Hệ số lương:{e.salaryScale}</p>
                    <p style={{ textAlign: "left" }}>Số ngày làm thêm:{e.overTime}</p>
                    <h6 >Lương: {new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(lcb * e.salaryScale + (lcb / 26) * e.overTime * 3)}</h6>
                </div>
            </div>
        );
    });


    return (
        <div className="TrangBangLuong">
            <h1>Bảng lương</h1>
            <div className='container'>
                <div className='row'>
                    {mang}
                </div>
            </div>

        </div>
    );
}

export default TrangBangLuong;
