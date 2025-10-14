// React Router의 createBrowserRouter 불러오기
// createBrowserRouter 함수
// 라우터 설정을 생성하는 함수
// 라우터 : 주소(URL)와 컴포넌트를 매핑
import { createBrowserRouter } from "react-router-dom";

// 레이아웃 컴포넌트 불러오기
import AuthLayout from "../layout/AuthLayout.jsx";
import DummyLayout from "../layout/DummyLayout.jsx";
import ProtectedLayout from "../layout/ProtectedLayout.jsx";
import RootLayout from "../layout/RootLayout";

// 페이지 컴포넌트 불러오기
import About from "../pages/RootPages/About.jsx";
import Home from "../pages/RootPages/Home.jsx";
import PostDetail from "../pages/RootPages/PostDetail.jsx";
import PostList from "../pages/RootPages/PostList.jsx";
import Profile from "../pages/RootPages/Profile.jsx";

import AuthHome from "../pages/AuthPages/AuthHome.jsx";
import Login from "../pages/AUthPages/Login.jsx";
import Signup from "../pages/AuthPages/Signup.jsx";

import Carts from "../pages/DummyPages/Carts.jsx";
import DummyHome from "../pages/DummyPages/DummyHome.jsx";
import Posts from "../pages/DummyPages/Posts.jsx";
import Products from "../pages/DummyPages/Products.jsx";

// 경로 상수 불러오기
import PATHS from "../constants/path.js";

// 라우터 설정 생성
const router = createBrowserRouter([
  {
    path: PATHS.ROOT.INDEX, // "/" (최상위 경로)
    Component: RootLayout,
    children: [
      // 중첩할 자식 경로 객체를 정의하는 배열
      {
        index: true, // index: true -> 부모 경로의 기본(root) 경로
        // 완성되는 path : "/" (부모 경로와 동일)
        Component: Home,
      },
      {
        path: PATHS.ROOT.ABOUT, // "/about"
        Component: About,
      },
      {
        path: PATHS.ROOT.POSTS, // "/posts"
        Component: PostList,
      },
      {
        path: PATHS.ROOT.POST_DETAIL, // "/posts/:postId"
        Component: PostDetail,
      },
      {
        // path 속성 X
        Component: ProtectedLayout,
        // 보호할 경로와 컴포넌트 정의
        children: [
          {
            path: PATHS.ROOT.PROFILE, // "/profile"
            Component: Profile,
          },
        ],
      },
    ],
  },
  // AuthLayout 경로 설정
  {
    path: PATHS.AUTH.INDEX, // "/auth"
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthHome,
      },
      // 로그인 경로(path)와 Component 설정
      {
        path: PATHS.AUTH.LOGIN,
        Component: Login,
      },
      // 회원가입 경로(path)와 Component 설정
      {
        path: PATHS.AUTH.SIGNUP,
        Component: Signup,
      },
    ],
  },
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
]);

export default router;
