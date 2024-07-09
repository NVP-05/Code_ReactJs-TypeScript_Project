import React from "react";
import {
  FaUser,
  FaClipboardList,
  FaUsers,
  FaBox,
  FaShoppingCart,
  FaCogs,
  FaMoneyCheckAlt,
  FaChartLine,
  FaCalendarAlt,
} from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <div className="bg-blue-800 text-white w-64 min-h-screen p-4">
        <div className="flex items-center mb-6">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nvp-05.appspot.com/o/image%2FTAT_1163.jpg?alt=media&token=889139c3-392f-474d-b37e-fad61368d16b"
            alt=""
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="font-semibold">Nguyễn Phúc</h2>
            <span>Chào mừng bạn trở lại</span>
          </div>
        </div>
        <ul>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaClipboardList className="mr-2" /> Bảng điều khiển
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaUser className="mr-2" /> Quản lý người dùng
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaUsers className="mr-2" /> Quản lý khách hàng
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaBox className="mr-2" /> Quản lý sản phẩm
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaShoppingCart className="mr-2" /> Quản lý đơn hàng
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaCogs className="mr-2" /> Quản lý nội bộ
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaMoneyCheckAlt className="mr-2" /> Bảng kê lương
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaChartLine className="mr-2" /> Báo cáo doanh thu
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaCalendarAlt className="mr-2" /> Lịch công tác
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <IoLogOut className="mr-2" /> 
              <Link to={"/login"}>Đăng xuất</Link>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
