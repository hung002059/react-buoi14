import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { notification } from "antd";
export default function AdminGuard() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userState.userInfo) return navigate("/login");

    if (
      userState.userInfo &&
      userState.userInfo.maLoaiNguoiDung !== "QuanTri"
    ) {
      notification.warning({ message: "KH không thể vào trang Admin" });
      return navigate("/home");
    }
  });
  return <div>admin.guard</div>;
}
