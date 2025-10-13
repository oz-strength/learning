import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import AuthLayout from "../layout/AuthLayout";
import ProtectedLayout from "../layout/ProtectedLayout";
import RootLayout from "../layout/RootLayout";

// 페이지 컴포넌트 불러오기
import AuthHome from "../pages/AuthPages/AuthHome";
import Login from "../pages/AuthPages/Login";
import Signup from "../pages/AuthPages/Signup";
import About from "../pages/RootPages/About";
import Home from "../pages/RootPages/Home";
import Profile from "../pages/RootPages/Profile";

// 라우터 생성
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      // 중첩할 자식 경로 객체를 정의하는 배열
      { index: true, Component: Home }, // index: true -> path: "/" 와 동일
      { path: "about", Component: About },
      {
        // path 속성 없음
        Component: ProtectedLayout,
        // 보호할 경로와 컴포넌트 정의
        children: [{ path: "profile", Component: Profile }],
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      { index: true, Component: AuthHome },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },
    ],
  },
]);

// 라우터 내보내기
export default router;
