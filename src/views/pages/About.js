import SimpleFooter from 'components/Footers/SimpleFooter';
import DemoNavbar from 'components/Navbars/DemoNavbar';
import React from 'react';
import { Container, Row, Col, Jumbotron, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const About = () => {
  return (

    <>
    <DemoNavbar />
    <main>
      
      <Container>
        <Jumbotron className="mt-5">
          <h1 className="display-4">About Mawasim Radio</h1>
          <p className="lead">Mawasim Production is an economic media house operating in Sudan.</p>
        </Jumbotron>
        <section>
          <Row>
            <Col md="12">
              <Card className="mb-4">
                <CardImg top width="100%" src="https://via.placeholder.com/800x400" alt="Our Mission" />
                <CardBody>
                  <CardTitle tag="h2">Our Mission</CardTitle>
                  <CardText>
                    At Mawasim Production, our mission is to follow Sudan's economic, social, and cultural conditions
                    meticulously. We aim to build permanent narratives, create vital and innovative axes, and develop
                    brands that become a new vocabulary in the economic scene of our country and the region. We are dedicated
                    to making a truly effective impact on the economic landscape.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

        <section>
          <Row>
            <Col md="6">
              <Card className="mb-4">
                <CardImg top width="100%" src="https://via.placeholder.com/400x300" alt="Our Vision" />
                <CardBody>
                  <CardTitle tag="h3">Our Vision</CardTitle>
                  <CardText>
                    Our vision is to be a leading media house that not only reports on economic events but also shapes
                    the economic discourse in Sudan and the region. We strive to provide insightful analysis and foster
                    a deeper understanding of economic and social issues, contributing to the development and prosperity
                    of our society.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="mb-4">
                <CardImg top width="100%" src="https://via.placeholder.com/400x300" alt="Our Values" />
                <CardBody>
                  <CardTitle tag="h3">Our Values</CardTitle>
                  <CardText>
                    We are committed to:
                    <ul>
                      <li><strong>Integrity:</strong> Upholding the highest standards of honesty and ethical conduct in all our activities.</li>
                      <li><strong>Innovation:</strong> Continuously seeking new and creative ways to deliver impactful content and services.</li>
                      <li><strong>Excellence:</strong> Striving for excellence in everything we do to provide the best possible outcomes for our audience and stakeholders.</li>
                      <li><strong>Community:</strong> Engaging with and supporting the communities we serve to foster growth and development.</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

        <section>
          <Row>
            <Col md="12">
              <Card className="mb-4">
                <CardImg top width="100%" src="https://via.placeholder.com/800x400" alt="Our Services" />
                <CardBody>
                  <CardTitle tag="h2">Our Services</CardTitle>
                  <CardText>
                    Mawasim Production offers a range of services aimed at providing comprehensive media solutions:
                    <ul>
                      <li><strong>Economic Reporting:</strong> Detailed coverage and analysis of economic events and trends.</li>
                      <li><strong>Cultural Programming:</strong> Shows and segments that highlight Sudan's rich cultural heritage.</li>
                      <li><strong>Social Insights:</strong> Programs that delve into social issues and provide a platform for discussion and change.</li>
                      <li><strong>Brand Development:</strong> Creating and nurturing brands that resonate with our audience and reflect our values.</li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>

        <section>
          <Row>
            <Col md="12">
              <Card className="mb-4">
                <CardImg top width="100%" src="https://via.placeholder.com/800x400" alt="Contact Us" />
                <CardBody>
                  <CardTitle tag="h2">Contact Us</CardTitle>
                  <CardText>
                    We would love to hear from you! Whether you have questions, feedback, or partnership inquiries, please
                    don't hesitate to reach out to us.
                    <div className="contact-details">
                      <strong>Email:</strong> contact@mawasimradio.com
                      <br />
                      <strong>Phone:</strong> +249-123-456789
                      <br />
                      <strong>Address:</strong> Mawasim Production, Khartoum, Sudan
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    </main>
    <SimpleFooter />
    </>
  );
};

export default About;