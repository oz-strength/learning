import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
export default function PrivateLayout() {
  const token = useSelector(state => state.auth.token);

  if (!token) {
    alert("로그인 해주세요.");
    return <Navigate to="/login" replace />;
  } else {
    return <Outlet />;
  }
}
