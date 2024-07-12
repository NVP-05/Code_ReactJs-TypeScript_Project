import { FaUser, FaClipboardList, FaUsers } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function AdminPosts() {
  return (
    <div>
      <div className="bg-blue-800 text-white w-64 min-h-screen p-4">
        <div className="flex items-center mb-6">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nvp-05.appspot.com/o/image%2FTAT_1163.jpg?alt=media&token=889139c3-392f-474d-b37e-fad61368d16b"
            alt=""
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="font-semibold">Nguyễn Văn Phúc</h2>
            <span>Chào mừng bạn trở lại</span>
          </div>
        </div>
        <ul>
          <li className="mb-2">
            <Link
              to="/admin/post"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaClipboardList className="mr-2" /> Quản lý bài viết
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/admin/user"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaUser className="mr-2" /> Quản lý người dùng
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/admin/group"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <FaUsers className="mr-2" /> Quản lý nhóm
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/login"
              className="flex items-center px-4 py-2 hover:bg-blue-700 rounded"
            >
              <IoLogOut className="mr-2" /> Đăng xuất
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
