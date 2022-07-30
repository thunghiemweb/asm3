import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from "react";

import {
    // Button, Modal, ModalHeader, ModalBody, ModalFooter,
    // Form,
    // Row, Col, Label,
    // FormFeedback,
    // Input,
    Breadcrumb, BreadcrumbItem,

} from 'reactstrap';

import Card from 'react-bootstrap/Card';

class TrangBangLuong extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dsnv: this.props.dsnv,

        };
    };

    render() {

        const tinhluong = (e) => {
            return 3000000 * e.salaryScale + 200000 * e.overTime;
        }

        const thapdencao = () => {
            console.log("thapdencao");
            this.setState({ dsnv: this.state.dsnv.sort((a, b) => tinhluong(a) - tinhluong(b)) });
        }
        const caodenthap = () => {
            console.log("caodenthap");
            this.setState({ dsnv: this.state.dsnv.sort((a, b) => tinhluong(b) - tinhluong(a)) });
        }

        const mang = (arr) => arr.map((e) => {

            return (
                <div key={e.id} className="col-12 col-sm-6 col-md-4 ">
                    <Card >
                        <Card.Body>
                            <Card.Title>{e.name}</Card.Title>
                            <Card.Text>Mã nhân viên:{e.id}</Card.Text>
                            <Card.Text>Hệ số lương:{e.salaryScale}</Card.Text>
                            <Card.Text>Số ngày làm thêm:{e.overTime}</Card.Text>
                            <Card.Text>Lương: {new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(tinhluong(e))}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            );
        });

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
                        {mang(this.state.dsnv)}
                    </div>
                </div>

            </div>
        );
    }
}

export default TrangBangLuong;
