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
import { Button, Container, Row, Col, CardBody, Card } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="">
                    <h1 className="text-white font-weight-bold">
                      Mawasim Podcasting
                    </h1>
                    <p className="lead text-white">
                      Mawasim Production is an economic media house operating in Sudan.
                      We follow Sudan's economic, social and cultural conditions to build permanent narratives,
                      vital and innovative axes and Brands to become completely new vocabulary,
                      and truly effective in the economic scene in our country and the region.
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="#"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-lightbulb-o" ></i>
                        </span>
                        <span className="btn-inner--text">What We Do ? </span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/creativetimofficial/argon-design-system-react"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-microphone" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Our Programs</span>
                          
                        </span>
                      </Button>
                    </div>
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *proudly coded by
                      </small>
                      <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px" }}
                        src={require("assets/img/brand/creativetim-white-slim.png")}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i class="fa fa-microphone" aria-hidden="true"></i>
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Radio Mawasim
                        </h6>
                        <p className="description mt-3">
                          Explore Sudan's agricultural sector with insightful programs and dialogues featuring industry pioneers,
                          creating a valuable resource for all stakeholders.
                        </p>
                  
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i class="fa fa-film" aria-hidden="true"></i>
                        </div>
                        <h6 className="text-success text-uppercase">
                          Mawasim Media
                        </h6>
                        <p className="description mt-3">
                        Blend entertainment with insightful news and stories about Sudan's 
                        social and economic conditions, adding diversity to our country's
                        arts and media scene.
                        </p>
                       
                        <Button
                          className="mt-4"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i class="fa fa-video-camera" aria-hidden="true"></i>
                        </div>
                        <h6 className="text-warning text-uppercase">
                          Eshara Studio
                        </h6>
                        <p className="description mt-3">
                        Eshara Studio provides top-notch artistic and digital production
                        services, including business tourism documentation and campaign
                        management.
                        </p>
                      
                        <Button
                          className="mt-4"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Hero;
