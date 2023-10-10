import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand"></a>
                <form className="d-flex" role="search">
                    <input className="form-control me-5 " type="search" placeholder="Search Twitter" aria-label="Search" />
                </form>
            </div>
        </nav>
    )

}