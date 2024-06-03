import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

class WhoWeAre extends Component {
  render() {
    return (
      <section className="section section-lg who-we-are">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg="8">
              <h2 className="display-3">Who We Are</h2>
              <p className="lead">
                At Mawasim, we are dedicated to providing the best services in the industry. Our mission is to deliver
                excellence and innovation in everything we do.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="6" className="mb-4">
              <div className="text-center">
                <i className="fa fa-bullseye fa-3x mb-3 icon"></i>
                <h4 className="mb-3">Our Mission</h4>
                <p>
                  Our mission is to create a sustainable and profitable environment for our clients by leveraging cutting-edge
                  technology and unparalleled expertise. We strive to exceed expectations and set new standards in our field.
                </p>
              </div>
            </Col>
            <Col lg="6" className="mb-4">
              <div className="text-center">
                <i className="fa fa-eye fa-3x mb-3 icon"></i>
                <h4 className="mb-3">Our Vision</h4>
                <p>
                  We envision a future where our services lead the industry, fostering growth and innovation. Our goal is to be
                  the go-to provider for all our clients' needs, consistently delivering high-quality solutions.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg="4" className="p-2 d-flex">
              <Card className="card-lift--hover shadow text-center border-0 p-4 h-100">
                <i className="fa fa-users fa-3x mb-3 icon mx-auto"></i>
                <h4 className="mb-3">Our Team</h4>
                <p>
                  Our team consists of experienced professionals who are passionate about what they do. We work collaboratively
                  to ensure that our clients receive the best service possible.
                </p>
              </Card>
            </Col>
            <Col lg="4" className="p-2 d-flex">
              <Card className="card-lift--hover shadow text-center border-0 p-4 h-100">
                <i className="fa fa-handshake fa-3x mb-3 icon mx-auto"></i>
                <h4 className="mb-3">Our Values</h4>
                <p>
                  Integrity, innovation, and customer satisfaction are at the core of our values. We believe in building
                  long-lasting relationships with our clients based on trust and mutual respect.
                </p>
              </Card>
            </Col>
            <Col lg="4" className="p-2 d-flex">
              <Card className="card-lift--hover shadow text-center border-0 p-4 h-100">
                <i className="fa fa-envelope fa-3x mb-3 icon mx-auto"></i>
                <h4 className="mb-3">Contact Us</h4>
                <p>
                  Want to learn more about what we do? Feel free to reach out to us. We're always here to help and provide
                  more information about our services.
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
