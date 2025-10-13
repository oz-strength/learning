import { NavLink, Outlet } from "react-router-dom";
export default function AuthLayout() {
  const baseClass = `border-2 border-amber-300 p-2`;
  const activeClass = `border-2 border-red-900 font-bold`;

  return (
    <>
      <h1>AuthLayout Component</h1>
      <div>
        <NavLink
          to="/auth"
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }>
          인증 홈페이지
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
          to="/auth/login">
          로그인 페이지
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
          to="/auth/signup">
          회원가입 페이지
        </NavLink>
        <br />
        <NavLink
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
          to="/">
          홈페이지
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
