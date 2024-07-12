import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess } from "../../store/reducers/loginReducer";
import { Userlogin } from "../../interface";

export default function Login() {
  const [user, setUser] = useState<Userlogin>({
    email: "",
    password: "",
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const loginState = useSelector((state: any) => state.login);

  // useEffect(() => {
  //   if (loginState.isLoggedIn) {      
  //     alert("Đăng nhập thành công.");
  //     navigate("/");
  //   }
  // }, [loginState.isLoggedIn, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const adminResponse = await fetch("http://localhost:8080/admin");
      const adminData = await adminResponse.json();

      const foundAdmin = adminData.find(
        (u: Userlogin) => u.email === user.email && u.password === user.password
      );

      if (foundAdmin) {
        alert("Đăng nhập vào trang admin thành công.");
        navigate("/admin");
        return;
      }

      const userResponse = await fetch("http://localhost:8080/users");
      const userData = await userResponse.json();

      const foundUser = userData.find(
        (u: Userlogin) => u.email === user.email && u.password === user.password
      );

      if (foundUser) {
        if (foundUser.status) {
          dispatch(loginSuccess());
          navigate("/");
        } else {
          dispatch(loginFailure("Tài khoản đã bị khóa"));
        }
      } else {
        dispatch(loginFailure("Email hoặc mật khẩu không đúng"));
      }
    } catch (error) {
      dispatch(loginFailure("Đã xảy ra lỗi"));
    }
  };

  useEffect(() => {
    if (location.state && location.state.message) {
      alert(location.state.message);
    }
  }, [location]);

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
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded-lg"
          >
            Đăng nhập
          </button>
        </form>
        {loginState.error && (
          <div className="text-red-500 mt-4 text-center">
            {loginState.error}
          </div>
        )}
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
