import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

class WhoWeAre extends Component {
  render() {
    return (
      <section className="section section-lg who-we-are">
        <Container>
          <Row className='d-flex align-items-center'>
            <Col lg="5" className="p-5">
              <img src={require("assets/img/main/mic-4.jpg")} alt="Wheat Fields" className="img-fluid leaf-shape-left" />
            </Col>
            <Col lg="7" className="p-5">
              <div className="">
                <div>
                  <h2 className="section-title">
                    <span className="bg-mawasim text-white px-3 py-1">Who We Are </span>
                  </h2>
                </div>
                <div className="mt-5">
                  At Mawasim Radio, we are committed to being more than just a voice on the airwaves.
                  As a pioneering media entity in Sudan, we strive to connect, inform, and entertain
                  our listeners with high-quality, relevant content. Our mission is to provide a platform
                  where diverse voices can be heard, fostering a sense of community and shared understanding.
                  We believe in the power of radio to inspire change and enrich lives,
                  and we are dedicated to delivering exceptional programming that reflects the interests and
                  values of our audience.
                </div>
              </div>

            </Col>
          </Row>

          <Row className="mt-5">
            <Col lg="4" className="mb-4 d-flex">
              <Card className="card-lift--hover shadow text-center border-0 px-4 pt-4 pb-2 h-100 ">
                <div className='bg-gradient-mawasim text-white p-4 rounded mb-3'>
                  <i className="fa fa-bullseye fa-3x mb-3 icon mx-auto"></i>
                  <h4 className="text-white px-3 py-1">Mission</h4>
                </div>
                <p>

                  Creating a sustainable, profitable environment for our clients through cutting-edge technology and expertise.
                </p>
              </Card>
            </Col>
            <Col lg="4" className="mb-4 d-flex">
              <Card className="card-lift--hover shadow text-center border-0 px-4 pt-4 pb-2 h-100">
                <div className='bg-gradient-mawasim text-white p-4 rounded mb-3'>
                  <i className="fa fa-eye fa-3x mb-3 icon mx-auto"></i>
                  <h4 className="text-white px-3 py-1">Vision</h4>
                </div>
                <p>
                  Leading the industry with innovative services, fostering growth, and delivering high-quality solutions.
                </p>
              </Card>
            </Col>
            <Col lg="4" className="mb-4 d-flex">
              <Card className="card-lift--hover shadow text-center border-0 px-4 pt-4 pb-2 h-100">
                <div className='bg-gradient-mawasim text-white p-4 rounded mb-3'>
                  <i className="fa fa-handshake-o fa-3x mb-3 icon text-white mx-auto"></i>
                  <h4 className="text-white">Values</h4>
                </div>

                <p>
                  Integrity, innovation, and customer satisfaction are our core values, building trust and respect.
                </p>
              </Card>
            </Col>
          </Row>

        </Container>
      </section>
    );
  }
}

export default WhoWeAre;
