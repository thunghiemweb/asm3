import './App.css';

import React from 'react'

import { useState } from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";


import { STAFFS } from "./shared/staffs"
import { DEPARTMENTS } from "./shared/staffs"

import HTThanhDieuHuong from "./trang/ThanhDieuHuong";
import HTTrangBangLuong from "./trang/TrangBangLuong";
import HTTrangNhanVien from "./trang/TrangNhanVien";
import HTTrangPhongBan from "./trang/TrangPhongBan";
import HTPhanChanTrang from "./trang/PhanChanTrang";
import HTTrangChiTietNV from "./trang/TrangChiTietNV";
import HTTrangTaoNhanVienMoi from "./trang/TrangTaoNhanVienMoi";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {



  // useState nhận dữ liệu từ Child component 
  const [word, setWord] = useState(null)


  return (
    <div className="App">

      {/* Phần đầu trang */}
      <HTThanhDieuHuong />

      {/* <h1>----- {word} </h1> */}

      {/* Phần thân trang */}
      <Routes>

        <Route path="LinkTrangPhongBan" element={<HTTrangPhongBan chucvu={DEPARTMENTS} dsnv={STAFFS} />} />
        <Route path="LinkTrangBangLuong" element={<HTTrangBangLuong dsnv={STAFFS} />} />

        <Route path="/" element={<HTTrangNhanVien dsnv={STAFFS} ChonNV={word => setWord(word)} />} />
        <Route path="staffs/*" element={<HTTrangChiTietNV nv={word} />} />

        <Route path="LinkTrangTaoNhanVienMoi" element={<HTTrangTaoNhanVienMoi />} />
      </Routes>


      {/* Phần chân trang */}
      <HTPhanChanTrang />

    </div >
  );
}

export default App;
