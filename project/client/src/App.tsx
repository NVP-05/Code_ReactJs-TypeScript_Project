import Login from "./pages/until/Login";
import Register from "./pages/until/Register";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./pages/admin/Admin";
import AdminUser from "./pages/admin/AdminUser";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/admin/user" element={<AdminUser></AdminUser>}></Route>
      </Routes>
    </div>
  );
}
