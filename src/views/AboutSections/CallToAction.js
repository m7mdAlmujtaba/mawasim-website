import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import ContactModal from 'views/IndexSections/ContactModal';

const CallToAction = () => {
  return (
    <section className="section section-lg pt-0">
      <Container>
        <Card className="bg-gradient-mawasim shadow-lg border-0">
          <div className="p-5">
            <Row className="align-items-center">
              <Col lg="8">
                <h3 className="text-white">
                  Partner with Mawasim for Effective Media and Marketing Solutions
                </h3>
                <p className="lead text-white mt-3">
                  At Mawasim, we offer unparalleled expertise to help your business thrive. Our team is dedicated to providing innovative solutions that drive success. Let's embark on this journey together and achieve greatness.
                </p>
              </Col>
              <Col className="ml-lg-auto" lg="3">
                <ContactModal />
              </Col>
            </Row>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default CallToAction;
