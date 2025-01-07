import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onPasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (!emailRegex.test(email)) {
      alert("이메일 형식 체크");
      return;
    }

    if (password.length < 8) {
      alert("비밀번호 8자 이상");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호 불일치");
      return;
    }

    //1. supabase 회원가입
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          nickname,
        },
      },
    });

    if (error) {
      alert(`회원가입 실패 ${error.message}`);
      return;
    }
    // 2. user 데이터
    const { error: userError } = await supabase.from("users").insert({
      id: data.user?.id,
      email: email,
      nickname: nickname,
    });

    if (userError) {
      alert(`유저 생성에 실패했습니다. ${userError.message}`);
      return;
    }

    alert("회원가입에 성공했습니다~!");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center  h-screen">
      <h1 className="text-2xl font-bold">회원가입</h1>
      <form className="flex flex-col gap-5 w-[25rem]" onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-2xl">
            이메일
          </label>
          <input
            className="border border-blue-500 p-3 rounded-md"
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={onEmailChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="nickname" className="text-sm">
            닉네임
          </label>
          <input
            className="border border-gray-300 rounded-md p-2"
            id="nickname"
            name="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={nickname}
            onChange={onNicknameChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm">
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="border border-gray-300 rounded-md p-2"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChange={onPasswordChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="passwordConfirm" className="text-sm">
            비밀번호 확인
          </label>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            className="border border-gray-300 rounded-md p-2"
            placeholder="비밀번호를 한 번 더 입력해주세요."
            value={passwordConfirm}
            onChange={onPasswordConfirmChange}
            required
          />
        </div>
        <button
          className="py-2 px-4 text-white bg-blue-500 rounded-md"
          type="submit"
        >
          회원가입
        </button>
        <Link
          className="py-2 text-center text-blue-500 border border-blue-500 rounded-md"
          to="/login"
        >
          로그인하러 가기
        </Link>
      </form>
    </div>
  );
}
