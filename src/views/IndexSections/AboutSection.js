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
// nodejs library that concatenates classes

// reactstrap components
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardImg,
} from "reactstrap";

// core components

class AboutSection extends React.Component {

    render() {
        return (
            <>
                  <Container>
                        <Row className="row-grid align-items-center">
                            <Col md="6" className="">
                                <Card className="bg-default shadow border-0">
                                    <CardImg className=""
                                        alt="..."
                                        src={require("assets/img/main/mic-2.jpg")}
                                        top
                                    />
                                    <blockquote className="card-blockquote">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="svg-bg"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 583 95"
                                        >
                                            <polygon
                                                className="fill-default"
                                                points="0,52 583,95 0,95"
                                            />
                                            <polygon
                                                className="fill-default"
                                                opacity=".2"
                                                points="0,42 583,95 683,0 0,95"
                                            />
                                        </svg>
                                        <h4 className="display-3 font-weight-bold text-white">
                                            Your Partners
                                        </h4>
                                        <p className="lead text-italic text-white">
                                            Regardless of your business size, market challenges will arise.
                                            At Mawasim, we're your partner for effective media and marketing solutions.
                                            Meet our team today.
                                        </p>
                                    </blockquote>
                                </Card>
                            </Col>
                            <Col md="6">
                                <div className="pl-md-5">

                                    <h3 className="section-title text-uppercase"> <span className="bg-mawasim text-white px-3 py-1">Grow</span> with Us </h3>
                                    <p className="">
                                        Whether you are a large organization, a medium company,
                                        or a small store, challenges regarding your business
                                        position in the market, identity, stunted growth)
                                        will confront you one day, and you will find that one
                                        of these statements is true in some way to you and another
                                        is almost true! Well, at Mawasem, we always introduce ourselves
                                        as (your closest partner, for effective media and marketing solutions),
                                        We plan to be more than partners... in more than one journey.
                                        Get to know the work team now.
                                    </p>

                                    <Button
                                        className="btn-1 ml-1"
                                        color="mawasim"
                                        outline
                                        type="button"
                                    >
                                        Get In Touch Now
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </>
        );
    }
}

export default AboutSection;
