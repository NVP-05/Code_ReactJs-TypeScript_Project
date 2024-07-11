import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Errors, User } from "../../interface";
import { addUser } from "../../store/reducers/registerReducer";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registrationSuccess = useSelector(
    (state: any) => state.register.success
  );

  const [user, setUser] = useState<User>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validate = () => {
    const newErrors: Errors = {};
    if (!user.email) {
      newErrors.email = "Email không được để trống.";
    } else if (!validateEmail(user.email)) {
      newErrors.email = "Email không hợp lệ.";
    }
    if (!user.username) {
      newErrors.username = "Tên người dùng không được để trống.";
    }
    if (!user.password) {
      newErrors.password = "Mật khẩu không được để trống.";
    }
    if (!user.confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu.";
    } else if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const checkEmailExists = async (email: string): Promise<boolean> => {
    try {
      const response = await fetch("http://localhost:8080/users");
      const data = await response.json();
      return data.some((u: User) => u.email === email);
    } catch (error) {
      console.error("Error checking email:", error);
      return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({}); 
    if (validate()) {
      const emailExists = await checkEmailExists(user.email);
      if (emailExists) {
        setErrors({ ...errors, email: "Email đã được sử dụng." });
      } else {
        const newUser: any = {
          email: user.email,
          username: user.username,
          password: user.password,
          status: true
        };
        dispatch(addUser(newUser));
        navigate("/login");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-center mb-6">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/project-8d5bb.appspot.com/o/Instagram_logo.svg.png?alt=media&token=c4386468-323c-4752-b827-0dbb712edd99"
            alt="Instagram"
            className="w-32"
          />
        </div>
        <p className="text-center text-gray-500 mb-4">
          Đăng ký để xem ảnh và video từ bạn bè.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              name="email"
              onChange={handleChange}
              value={user.email}
              type="text"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              name="username"
              onChange={handleChange}
              value={user.username}
              type="text"
              placeholder="Tên người dùng"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              name="password"
              onChange={handleChange}
              value={user.password}
              type="password"
              placeholder="Mật khẩu"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              name="confirmPassword"
              onChange={handleChange}
              value={user.confirmPassword}
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
            )}
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên
            hệ của bạn lên Instagram.{" "}
            <a href="#" className="text-blue-500">
              Tìm hiểu thêm
            </a>
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Bằng cách đăng ký, bạn đồng ý với{" "}
            <a href="#" className="text-blue-500">
              Điều khoản
            </a>
            ,{" "}
            <a href="#" className="text-blue-500">
              Chính sách quyền riêng tư
            </a>{" "}
            và{" "}
            <a href="#" className="text-blue-500">
              Chính sách cookie
            </a>{" "}
            của chúng tôi.
          </p>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-lg"
          >
            Đăng ký
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-500">Bạn có tài khoản?</span>
          <Link to={"/login"} className="text-blue-500">
            {" "}
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}
