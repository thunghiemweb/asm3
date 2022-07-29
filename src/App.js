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

import HTTrangThemNhanVien from "./trang/TrangThemNhanVien";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {



  // useState nhận dữ liệu từ Child component 
  const [word, setWord] = useState(null)

  let listNV;

  // Lấy danh sách nhân viên lưu trong bộ nhớ
  const ListNVLuu = JSON.parse(localStorage.getItem("dsnv"));


  console.log("sfs" + ListNVLuu);
  // Nếu không có dữ liệu từ bộ nhớ sẽ lấy từ file staffs.jsx
  if (ListNVLuu === null) {
    listNV = STAFFS;
    localStorage.setItem("dsnv", JSON.stringify(STAFFS));
    console.log("Đã lưu dữ liệu vào localStorage");
  }
  else {
    listNV = ListNVLuu;
  }


  return (
    <div className="App">

      {/* Phần đầu trang */}
      <HTThanhDieuHuong />

      {/* <h1>----- {word} </h1> */}

      {/* Phần thân trang */}
      <Routes>

        <Route path="LinkTrangPhongBan" element={<HTTrangPhongBan chucvu={DEPARTMENTS} dsnv={listNV} />} />
        <Route path="LinkTrangBangLuong" element={<HTTrangBangLuong dsnv={listNV} />} />

        <Route path="/" element={<HTTrangNhanVien dsnv={listNV} ChonNV={word => setWord(word)} />} />
        <Route path="staffs/*" element={<HTTrangChiTietNV nv={word} />} />

        <Route path="LinkTrangThemNhanVien" element={<HTTrangThemNhanVien chucvu={DEPARTMENTS} />} />

      </Routes>


      {/* Phần chân trang */}
      <HTPhanChanTrang />

    </div >
  );
}

export default App;
