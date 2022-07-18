import './App.css';

import React from 'react'

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

function App() {
  return (
    <div className="App">

      {/* Phần đầu trang */}
      <HTThanhDieuHuong />

      {/* Phần thân trang */}
      <Routes>
        <Route path="/" element={<HTTrangNhanVien nv={STAFFS} />} />
        <Route path="LinkTrangPhongBan" element={<HTTrangPhongBan chucvu={DEPARTMENTS} nv={STAFFS} />} />
        <Route path="LinkTrangBangLuong" element={<HTTrangBangLuong nv={STAFFS} />} />
        <Route path="staffs/*" element={<HTTrangChiTietNV />} />
      </Routes>


      {/* Phần chân trang */}
      <HTPhanChanTrang />

    </div >
  );
}

export default App;
