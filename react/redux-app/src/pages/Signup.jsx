import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup, resetIsSignup } from "../store/authSlice";

export default function Signup() {
  // 사용자 입력 이메일 관리 상태
  const [email, setEmail] = useState("");
  // 사용자 입력 비밀번호 관리 상태
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSignup = useSelector(state => state.auth.isSignup);
  const error = useSelector(state => state.auth.error);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup({ email, password }));
  };

  // 회원가입 성공을 했을 때 알림창 띄우고
  // 홈페이지로 이동
  // useEffect 사용
  useEffect(() => {
    if (isSignup) {
      alert("회원가입 성공 ! 메일함을 확인하세요");
      dispatch(resetIsSignup);
      navigate("/");
    }
  }, [isSignup, dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input type="submit" value="회원가입" />
      </form>
    </>
  );
}
