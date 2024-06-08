import React from "react";
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer bg-gradient-mawasim pt-5">
                    <Container>
                        <Row className="mb-5 d-flex justify-content-center align-items-center">
                            <Col md="3" sm="6">
                                <img
                                    src={require("assets/img/brand/logo-white.png")}
                                    alt="Mawasim Logo"
                                    className="footer-logo mb-3 img-fluid"
                                />
                                <p className="text-white">
                                At Mawasim Radio, we are committed to being more than just a voice on the airwaves </p>
                            </Col>
                            <Col md="3" sm="6">
                                <h5 className="text-white">Company</h5>
                                <Nav vertical>
                                    <NavItem>
                                        <NavLink href="/about-us" className="text-white">About Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/services" className="text-white">Services</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/contact" className="text-white">Contact</NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col md="3" sm="6">
                                <h5 className="text-white">Resources</h5>
                                <Nav vertical>
                                    <NavItem>
                                        <NavLink href="/blog" className="text-white">Blog</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/case-studies" className="text-white">Case Studies</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/faq" className="text-white">FAQ</NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <Col md="3" sm="6">
                                <h5 className="text-white">Support</h5>
                                <Nav vertical>
                                    <NavItem>
                                        <NavLink href="/help-center" className="text-white">Help Center</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/privacy-policy" className="text-white">Privacy Policy</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/terms-of-service" className="text-white">Terms of Service</NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>

                        <Row className="row-grid align-items-center mb-5">
                            <Col lg="6">
                                <h3 className="text-white font-weight-light mb-2">
                                    Thank you for supporting us!
                                </h3>
                                <h4 className="text-white mb-0 font-weight-light">
                                    Let's get in touch on any of these platforms.
                                </h4>
                            </Col>
                            <Col className="text-lg-center btn-wrapper" lg="6">
                                <Button
                                    className="btn-icon-only rounded-circle"
                                    color="twitter"
                                    href="https://twitter.com/mawasim"
                                    id="tooltip475038074"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-twitter" />
                                    </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip475038074">
                                    Follow us
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="facebook"
                                    href="https://www.facebook.com/mawasim"
                                    id="tooltip837440414"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-facebook-square" />
                                    </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip837440414">
                                    Like us
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="dribbble"
                                    href="https://dribbble.com/mawasim"
                                    id="tooltip829810202"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-dribbble" />
                                    </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip829810202">
                                    Follow us
                                </UncontrolledTooltip>
                                <Button
                                    className="btn-icon-only rounded-circle ml-1"
                                    color="github"
                                    href="https://github.com/mawasim"
                                    id="tooltip495507257"
                                    target="_blank"
                                >
                                    <span className="btn-inner--icon">
                                        <i className="fa fa-github" />
                                    </span>
                                </Button>
                                <UncontrolledTooltip delay={0} target="tooltip495507257">
                                    Star on Github
                                </UncontrolledTooltip>
                            </Col>
                        </Row>
                        <hr className="divider" />
                        <Row className="align-items-center justify-content-md-between">
                            <Col md="6">
                                <div className="copyright text-white">
                                    © {new Date().getFullYear()}{" "}
                                    <a
                                        href="https://www.mawasim.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white"
                                    >
                                        Mawasim
                                    </a>
                                    .
                                </div>
                            </Col>
                            <Col md="6">
                                <Nav className="nav-footer justify-content-end">
                                    <NavItem>
                                        <NavLink
                                            href="https://www.mawasim.com"
                                            target="_blank"
                                            className="text-white"
                                        >
                                            Mawasim
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="https://www.mawasim.com/about"
                                            target="_blank"
                                            className="text-white"
                                        >
                                            About Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="http://blog.mawasim.com"
                                            target="_blank"
                                            className="text-white"
                                        >
                                            Blog
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            href="https://github.com/mawasim/license"
                                            target="_blank"
                                            className="text-white"
                                        >
                                            License
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}

export default Footer;
