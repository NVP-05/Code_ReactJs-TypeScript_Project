import React from "react";
import { FaCompass, FaHeart, FaHome, FaInstagram, FaPlusSquare, FaSearch, FaUserAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-1/5 p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-2">
          <FaInstagram className="text-2xl" />
          <h1 className="text-xl font-bold">Instagram</h1>
        </div>
        <div className="flex items-center space-x-2">
          <FaHome className="text-xl" />
          <span>Trang chủ</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaSearch className="text-xl" />
          <span>Tìm kiếm</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCompass className="text-xl" />
          <span>Khám phá</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPlusSquare className="text-xl" />
          <span>Tạo</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaHeart className="text-xl" />
          <span>Thông báo</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaUserAlt className="text-xl" />
          <span>Trang cá nhân</span>
        </div>
      </div>
    </div>
  );
}
