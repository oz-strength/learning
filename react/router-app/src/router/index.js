// React Router의 createBrowserRouter 불러오기
// createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import DummyLayout from "../layout/DummyLayout.jsx";

// 페이지 컴포넌트 불러오기

import Carts from "../pages/DummyPages/Carts.jsx";
import DummyHome from "../pages/DummyPages/DummyHome.jsx";
import Posts from "../pages/DummyPages/Posts.jsx";
import Products from "../pages/DummyPages/Products.jsx";

// 경로 상수 불러오기
import PATHS from "../../../constants/path.js";

// RootLayout 경로 배열 불러오기
import NotFound from "../pages/NotFound.jsx";
import authRoutes from "./routes/authRoute.js";
import rootRoutes from "./routes/rootRoutes.js";

// 라우터 설정 생성
const router = createBrowserRouter([
  // RootLayout 경로 설정
  // 스프레드 연산자로 경로 배열 복사
  ...rootRoutes,
  // AuthLayout 경로 설정
  ...authRoutes,
  {
    path: PATHS.DUMMY.INDEX,
    Component: DummyLayout,
    children: [
      {
        index: true,
        Component: DummyHome,
      },
      {
        path: PATHS.DUMMY.CARTS,
        Component: Carts,
      },
      // 로그인 경로(path)와 Component 설정
      {
        path: PATHS.DUMMY.POSTS,
        Component: Posts,
      },
      // 회원가입 경로(path)와 Component 설정
      {
        path: PATHS.DUMMY.PRODUCTS,
        Component: Products,
      },
    ],
  },
  { path: "*", Component: NotFound },
]);

export default router;
