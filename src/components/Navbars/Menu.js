/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll

import {
    NavItem,
    NavLink,
    Nav,
} from "reactstrap";

class Menu extends React.Component {
    render() {
        return (
            <>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about-us" target="">
                            About us
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/mawasim-media" target="">
                            Mawasim Media
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/eshara-studio" target="">
                            Eshara Studio
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/blog" target="">
                            Blog
                        </NavLink>
                    </NavItem>

                </Nav>

            </>
        );
    }
}

export default Menu;
