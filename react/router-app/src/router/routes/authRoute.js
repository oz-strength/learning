import PATHS from "../../../../constants/path";
import AuthLayout from "../../layout/AuthLayout";
import AuthHome from "../../pages/AuthPages/AuthHome";
import Login from "../../pages/AUthPages/Login";
import Signup from "../../pages/AuthPages/Signup";

const authRoutes = [
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
];
export default authRoutes;
