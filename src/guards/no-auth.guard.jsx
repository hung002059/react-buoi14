import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function NoAuthGuard() {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (userState.userInfo) navigate("/");
  }, []);

  return <Outlet />;
}
