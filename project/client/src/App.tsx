import Login from "./pages/until/Login";
import Register from "./pages/until/Register";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import AdminUser from "./pages/admin/AdminUser";
import AdminGroups from "./pages/admin/AdminGroups";
import AdminPosts from "./pages/admin/AdminPosts";
import Home from "./pages/user/Home";
import PersonalPage from "./pages/user/PersonalPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/admin/post" element={<AdminPosts></AdminPosts>}></Route>
        <Route path="/admin/user" element={<AdminUser></AdminUser>}></Route>
        <Route path="/admin/group" element={<AdminGroups></AdminGroups>}></Route>
        <Route path="/personalpage" element={<PersonalPage></PersonalPage>}></Route>
      </Routes>
    </div>
  );
}
