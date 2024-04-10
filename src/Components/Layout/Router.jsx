import { createBrowserRouter } from "react-router-dom";

import Register from "../Web_Pages/Register";
import Subscribe from "../Web_Pages/Subscribe";
import Login from "../Web_Pages/Login";
import AppLayout from "./AppLayout";
import Carousel from "../Web_Pages/Carousel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, path: "/", element: <Carousel /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
    ],
  },
]);
