import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { USER_INFO_KEY } from "../../constants/common";
import { setUserInfoAction } from "../../store/actions/user";

import "./index.scss";

export default function Header() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem(USER_INFO_KEY);

    dispatch(setUserInfoAction(null));

    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Movie
      </a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
        </ul>
        <div className="ml-auto">
          {!userState.userInfo ? (
            <>
              <button
                className="btn btn-outline-info my-2 my-sm-0 mr-2"
                type="sumit"
              >
                Register
              </button>
              <button
                onClick={() => navigate("/login")}
                className="btn btn-outline-success my-2 my-sm-0"
              >
                Login
              </button>
            </>
          ) : (
            <>
              <span className="mr-2">Hello : {userState.userInfo.hoTen}</span>
              <button onClick={handleLogout} className="btn btn-success">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
