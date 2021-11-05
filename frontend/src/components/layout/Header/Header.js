import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, logout } from "../../../actions/userAction";
import { useAlert } from "react-alert";
import "./Header.css";
export default function Header({ history }) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  const logoutUser = () => {
    dispatch(logout());
    alert.success("Logged out successfully !");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <span style={{ fontSize: 25 }}>
                <b>Ecommerce</b>
              </span>
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link color" to="/products">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <Link className="text-reset me-3" to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            {isAuthenticated ? (
              <>
                {user.role === "admin" && (
                  <Link className="nav-link color" to="/dashboard">
                    Dashboard
                  </Link>
                )}
                <Link className="nav-link color" to="/orders">
                  Orders
                </Link>
                <Link
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                  to="/profile"
                >
                  <img
                    src={user.avatar.url}
                    className="rounded-circle profile_image "
                    height="25"
                    alt=""
                    loading="lazy"
                  />
                </Link>

                <button
                  type="button"
                  className="btn btn-primary mx-3"
                  onClick={logoutUser}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link className="text-reset me-3" to="/login">
                <button type="button" className="btn btn-primary">
                  SignIn/SignUp
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
