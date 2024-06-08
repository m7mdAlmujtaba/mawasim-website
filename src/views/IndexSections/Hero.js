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
                    <h1 className="text-white hero-title text-uppercase">
                      Mawasim Podcasting
                    </h1>
                    <p className="lead text-white">
                    Mawasim Podcasting and Production is Sudan's premier agri-business media platform. We bring you the latest in farming, rural activities, and economic insights. Tune in for innovative narratives and top agriculture podcasts to enrich your knowledge and connection to Sudan's economic scene.
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="/about-us"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-lightbulb-o" ></i>
                        </span>
                        <span className="btn-inner--text">Who Are We ? </span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="mawasim"
                        href="#programs"
                        size="lg"
                        target=""
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-microphone" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-white mr-1">Our Programs</span>

                        </span>
                      </Button>
                    </div>
                    <div className="mt-5">
                      <br />
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
        </div >
        <section className="section section-lg pt-lg-0 mt--150">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <a href="/abou-us" className="card-link">
                      <Card className="card-lift--hover shadow text-center border-0">
                        <CardBody className="py-5">
                          <div className=" mb-3">
                            <img className="img-fluid w-50" alt="mawasim" src={require("assets/img/logos/mawasim.png")} />
                          </div>

                          <h4 className="">
                            Radio Mawasim
                          </h4>
                          <p className="description mt-3 card-text">
                            Explore Sudan's agricultural sector with insightful programs and dialogues featuring industry pioneers,
                            creating a valuable resource for all stakeholders.
                          </p>

                        </CardBody>
                      </Card>
                    </a>
                  </Col>
                  <Col lg="4">
                    <a href="/mawasim-media" className="card-link">
                      <Card className="card-lift--hover shadow text-center border-0">
                        <CardBody className="py-5">
                          <div className=" mb-3">
                            <img className="img-fluid w-50" alt="mawasim media" src={require("assets/img/logos/mawasim_media.png")} />
                          </div>
                          <h4 className="">
                            Mawasim Media
                          </h4>
                          <p className="description mt-3 card-text">
                            Blend entertainment with insightful news and stories about Sudan's
                            social and economic conditions, adding diversity to our country's
                            arts and media scene.
                          </p>


                        </CardBody>
                      </Card>
                    </a>
                  </Col>
                  <Col lg="4">
                    <a href="/eshara-studio" className="card-link">
                      <Card className="card-lift--hover shadow text-center border-0 cursor-pointer">
                        <CardBody className="py-5">
                          <div className="mb-3">
                            <img className="img-fluid w-50" alt="mawasim" src={require("assets/img/logos/eshara_studio.png")} />
                          </div>
                          <h4 className="">
                            Eshara Studio
                          </h4>
                          <p className="description mt-3 card-text">
                            Eshara Studio provides top-notch artistic and digital production services, including business tourism documentation and campaign management.
                          </p>
                        </CardBody>
                      </Card>
                    </a>
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
