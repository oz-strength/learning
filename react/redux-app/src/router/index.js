import { createBrowserRouter } from "react-router-dom";
import Profile from "../components/Profile";
import AuthLayout from "../layouts/AuthLayout";
import PrivateLayout from "../layouts/PrivateLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    Component: PrivateLayout,
    children: [
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
]);
export default router;
