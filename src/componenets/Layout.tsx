import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        헤더
        <button class="btn btn-blue">로그인</button>
        <button>회원가입</button>
      </header>
      <Outlet />
    </>
  );
}
