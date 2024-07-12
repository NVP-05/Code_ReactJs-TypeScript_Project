
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaRegHeart,
  FaPlusSquare,
  FaFilm,
  FaSignOutAlt,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header(){
  const loginState = useSelector((state: any) => state.login);

  const handleChange = () => {
    console.log(loginState.iisLoggedIn);
    loginState.iisLoggedIn == false;
  }

  return (
    <div className="w-64 bg-white h-screen p-5 shadow-md min-h-[100vh] fixed">
      <div className="text-2xl font-bold mb-8">Instagram</div>
      <div className="space-y-4 flex flex-col gap-3">
        <Link
          to="/"
          className="flex items-center space-x-4 text-gray-800 hover:text-black"
        >
          <FaHome className="w-6 h-6" />
          <span>Trang chủ</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-4 text-gray-800 hover:text-black"
        >
          <FaSearch className="w-6 h-6" />
          <span>Tìm kiếm</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-4 text-gray-800 hover:text-black"
        >
          <FaCompass className="w-6 h-6" />
          <span>Khám phá</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-4 text-gray-800 hover:text-black"
        >
          <FaFilm className="w-6 h-6" />
          <span>Reels</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-4 text-gray-800 hover:text-black"
        >
          <FaMessage className="w-6 h-6" />
          <span>Tin nhắn</span>
        </Link>
        <Link
          to="/notifications"
          className="flex items-center space-x-4 text-gray-800 hover:text-black"
        >
          <FaRegHeart className="w-6 h-6" />
          <span>Thông báo</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-4 text-gray-800 hover:text-black"
        >
          <FaPlusSquare className="w-6 h-6" />
          <span>Tạo</span>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link
          to="/personalpage"
          className="flex items-center space-x-4 text-black font-bold"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nvp-05.appspot.com/o/image%2FIMG_5111.JPG.jpg?alt=media&token=5460d0b5-94e7-4dc7-9e68-7a02fe036068"
            alt="Profile"
            className="w-6 h-6 rounded-full"
          />
          <span>Trang cá nhân</span>
        </Link>
        <Link onClick={handleChange}
          to="/login"
          className="flex items-center space-x-4 text-gray-800 hover:text-black"
        >
          <FaSignOutAlt className="w-6 h-6" />
          <span>Đăng xuất</span>
        </Link>
      </div>
    </div>
  );
};


