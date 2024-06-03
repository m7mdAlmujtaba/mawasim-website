import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import SimpleFooter from 'components/Footers/SimpleFooter';
import HomeNavbar from 'components/Navbars/HomeNavbar.js';
import Header from '../../components/Header.js';

class MawasimMedia extends React.Component {
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
          <Header
            title="Mawasim Media"
            description="Mawasim Production is an economic media house operating in Sudan."
          />
          <section className="section section-lg py-5">
            <Container>
              <Row className="justify-content-center text-center mb-5">
                <Col lg="8">
                  <h2 className="display-3">What We Do</h2>
                  <p className="lead">
                    At Mawasim, we specialize in providing comprehensive media solutions that drive economic growth and development in Sudan.
                  </p>
                </Col>
              </Row>
         
              <Row className="mt-5 justify-content-center">
                <Col lg="8" className="text-center">
                  <h3 className="display-4">Contact Us</h3>
                  <p className="lead">
                    Interested in learning more about what we do? Reach out to us for more information about our services and how we can help you.
                  </p>
                  <a href="mailto:info@mawasim.com" className="btn btn-primary mt-3">Email Us</a>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default MawasimMedia;
