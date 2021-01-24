import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {

    return (
        <div>
            <nav id="navbar" className="navbar navbar-light navbar-expand-sm justify-content-between mb-3 px-2">
                <button
                    className="navbar-toggler me-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                        <NavLink
                            className="nav-item nav-link"
                            activeClassName="nav-item nav-link active"
                            to="/home"
                        >
                            Home
                        </NavLink>
                    </ul>
                    <ul className="navbar-nav">
                        <NavLink
                            className="nav-item nav-link"
                            activeClassName="nav-item nav-link active"
                            to="/about"
                        >
                            About
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
