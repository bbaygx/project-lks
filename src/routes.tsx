import { createBrowserRouter } from "react-router-dom";
import AuthLayouts from "./app/auth/AuthLayouts";
import RootLayouts from "./app/root/RootLayouts";

import { Home } from "./app/root/pages";
import { SignIn } from "./app/auth/pages";
import SignUp from "./app/auth/pages/SignUp";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayouts />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
