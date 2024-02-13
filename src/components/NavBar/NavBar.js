import React from "react";
import NavItem from "./NavItem";
import ProfileItem from "./ProfileItem";

function NavBar() {
    const menuItems = [
        {href: "/", text: "Home"},
        {href: "/login", text: "Login"},
        {href: "/register", text: "Register"},
    ];

    const navItems = menuItems.map((item, index) => {
        return (
            <NavItem
                key={index}
                href={item.href}
                children={item.text}
            />
        );
    });

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid mx-5 px-xl-5">
                <a className="navbar-brand" href="#">JKPG City</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navItems}
                    </ul>
                    <div className={"d-flex"}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <ProfileItem/>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;