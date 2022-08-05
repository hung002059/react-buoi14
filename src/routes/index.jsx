import React, { Children } from "react";
import { useRoutes } from "react-router-dom";
import AdminGuard from "../guards/admin.guard";
import AuthGuard from "../guards/auth.guard";
import NoAuthGuard from "../guards/no-auth.guard";
import AdminLayout from "../layouts/admin";
import HomeLayout from "../layouts/home";
import MovieMangement from "../modules/movie-mangement/movie-mangement";
import Booking from "../pages/booking/booking";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import MovieDetail from "../pages/movie-detail/movie-detail";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetail />,
        },
        {
          path: "/",
          element: <NoAuthGuard />,
          children: [
            {
              path: "/login",
              element: <Login />,
            },
          ],
        },
        {
          path: "/",
          element: <AuthGuard />,
          children: [
            {
              path: "/booking/:maLichChieu",
              element: <Booking />,
            },
          ],
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <AdminGuard />,
          children: [
            { path: "/admin/movie-mangement", element: <MovieMangement /> },
          ],
        },
      ],
    },
  ]);

  return routing;
}
