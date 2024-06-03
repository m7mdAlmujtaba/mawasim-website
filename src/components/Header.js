import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Header extends React.Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <div className="position-relative">
          {/* Header for FREE version */}
          <section className="section section-header section-shaped">
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
                  <Col className="text-center">
                    <h1 className="text-white header-title text-uppercase">
                      {title}
                    </h1>
                    <p className="lead text-white">
                      {description}
                    </p>
                    <div className="mt-5">
                      <br />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Header;
