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

// reactstrap components
//import { Container, Row } from "reactstrap";

// core components
import HomeNavbar from "components/Navbars/HomeNavbar.js";

// index page sections
import Hero from "./IndexSections/Hero.js";
import Main from "./IndexSections/Main.js";
import Footer from "components/Footers/Footer.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <HomeNavbar />
        <main ref="main">
          <Hero />
          <Main />
        </main>
        <Footer />
      </>
    );
  }
}

export default Index;
