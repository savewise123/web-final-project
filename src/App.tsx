import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Layout from "./componenets/Layout";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/feeds/:id" element={<Detail />} />
          <Route path="/feeds/create" element={<CreatePage />} />
          <Route path="/feeds/update/:id" element={<UpdatePage />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
