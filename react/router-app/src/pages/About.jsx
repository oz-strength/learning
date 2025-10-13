import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>About Component</h1>
      <h1>소개 페이지</h1>
      <NavLink to="/">홈</NavLink>
      <br />
      <NavLink
        to="/about"
        className={({ isActive }) => {
          return isActive ? "text-blue-500 font-bold" : "";
        }}>
        소개
      </NavLink>
      <br />
      <NavLink to="/profile">사용자정보</NavLink>
    </>
  );
}
