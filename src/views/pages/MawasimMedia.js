import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from 'components/Footers/Footer';
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
            description="Your closest partner for effective media and marketing solutions."
          />
          <section className="section section-lg py-5">
            <Container>
              <Row className='d-flex align-items-center'>
                <Col lg="5" className="">
                  <img className="img-fluid" alt="mawasim" src={require("assets/img/logos/mawasim_media.png")} />
                </Col>
                <Col lg="7" className="">
                  <div className="">
                    <div>
                      <h2 className="section-title">
                        <span className="bg-mawasim text-white text-uppercase px-3 py-1">Mawasim</span> Media
                      </h2>
                    </div>
                    <div className="mt-5">
                      At Mawasim Media, we are dedicated to being your closest partner in achieving
                      effective media and marketing solutions. Operating in Sudan, our mission is to
                      connect, inform, and inspire our audience with high-quality content and innovative
                      strategies. Whether you are a large organization, a medium company, or a small
                      store, we are here to support your journey and help you overcome challenges related
                      to your market position, identity, and growth. Discover the power of collaboration
                      and excellence with Mawasim Media.
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default MawasimMedia;
