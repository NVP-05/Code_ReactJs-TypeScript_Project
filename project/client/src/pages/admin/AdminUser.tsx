import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaClipboardList, FaUser, FaUsers } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { block, getAllUser, unBlock } from "../../service/admin.service";

export default function AdminUser() {
  const userData = useSelector((state: any) => state.adminUser.user);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const changeStatusBlock = (id: number) => {
    dispatch(block(id));
  };

  const changeStatusUnBlock = (id: number) => {
    dispatch(unBlock(id));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = userData.filter((user: any) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
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
              to="#"
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
              to="#"
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
      <div>
        <div className="ms-28 mt-16">
          <form className="max-w-md mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tìm kiếm người dùng . . ."
                value={searchTerm}
                onChange={handleSearchChange}
                required
              />
            </div>
          </form>
        </div>

        <div className="relative overflow-x-auto ms-28 mt-14">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Tên người dùng
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Trạng thái
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.username}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">
                    {item.status ? (
                      <button
                        onClick={() => changeStatusBlock(item.id)}
                        className={"px-4 py-2 rounded bg-green-500 text-white"}
                      >
                        Khóa
                      </button>
                    ) : (
                      <button
                        onClick={() => changeStatusUnBlock(item.id)}
                        className={"px-4 py-2 rounded bg-red-500 text-white"}
                      >
                        Mở Khóa
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
