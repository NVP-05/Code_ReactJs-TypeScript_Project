import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./pages/admin/Admin";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Header></Header>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
      </Routes>
    </div>
  );
}
