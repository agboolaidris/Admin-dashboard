import { RiDashboardLine } from "react-icons/ri";
export default [
  {
    name: "Dashboard",
    icon: <RiDashboardLine />,
    path: "/",
  },
  {
    name: "Dashboard",
    icon: <RiDashboardLine />,
    path: "/#",
  },
  {
    name: "Authentication",
    icon: <RiDashboardLine />,
    children: [
      {
        name: "Login",
        path: "/login",
      },
      {
        name: "Register",
        path: "/register",
      },
    ],
  },
];
