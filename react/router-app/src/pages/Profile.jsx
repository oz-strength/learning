import { Navigate, useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const isLogin = true;

  if (isLogin === false) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <>
      {/* 페이지 URL 인자로 navigate 함수 호출 */}
      <button onClick={() => navigate("/")}>홈 페이지</button>
      <button onClick={() => navigate("/about")}>소개 페이지</button>
    </>
  );
}
