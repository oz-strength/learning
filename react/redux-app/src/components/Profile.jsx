import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

export default function Profile() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    alert("로그아웃 되었습니다.");
    navigate("/login");
  }

  const token = useSelector(state => state.auth.token);
  const [decodedToken, setDecodedToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // 토큰 디코딩
      setDecodedToken(jwtDecode(token));
    } else {
      // 로그인 상태가 아니면 로그인 페이지로 보내기
      // navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      <div>{token ? token : "로그인 해주세요."}</div>
      <div>
        {decodedToken ? `이메일: ${decodedToken.email}` : "로그인 해주세요"}
      </div>

      <div>
        <button
          className="border-2"
          onClick={() => {
            handleLogout();
          }}>
          로그아웃
        </button>
      </div>

      <h1>Profile Component</h1>
    </>
  );
}
