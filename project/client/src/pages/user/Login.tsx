import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/project-8d5bb.appspot.com/o/Instagram_logo.svg.png?alt=media&token=c4386468-323c-4752-b827-0dbb712edd99"
            alt="Instagram"
            className="w-32"
          />
        </div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-lg"
          >
            Đăng nhập
          </button>
        </form>
        <br />
        <a href="#" className="block text-center text-blue-500 mb-4">
          Quên mật khẩu?
        </a>
        <div className="text-center">
          <span className="text-gray-500">Bạn chưa có tài khoản?</span>
          <Link to={"/register"} className="text-blue-500">
            {" "}
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
}
