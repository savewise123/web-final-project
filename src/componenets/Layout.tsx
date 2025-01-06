import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const user = null;

  return (
    <>
      <header className="flex justify-between bg-white p-4 border-b ">
        <Link to="/">
          <img src="/logo12.svg" alt="logo12" />
        </Link>
        <div className="flex gap-5 items-center">
          {user ? (
            <>
              <Link to="mypage">{user.nickname}</Link>
              <button>로그아웃</button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-900 bg-white border border-gray-300 rounded-lg px-5 "
              >
                로그인
              </Link>
              <Link
                to="/signup"
                className="text-gray-900 bg-white border border-gray-300 rounded-lg px-5 px-3"
              >
                회원가입
              </Link>
            </>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
}
