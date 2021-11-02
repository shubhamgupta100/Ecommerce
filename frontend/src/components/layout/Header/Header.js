import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
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
            <Link className="navbar-brand mt-2 mt-lg-0">
              <span style={{ fontSize: 25 }}>
                <b>Ecommerce</b>
              </span>
            </Link>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Projects</Link>
              </li> */}
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <Link className="text-reset me-3">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link className="text-reset me-3">
              <button type="button" class="btn btn-primary">
                SignIn/SignUp
              </button>
            </Link>
            <Link
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                className="rounded-circle"
                height="25"
                alt=""
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
