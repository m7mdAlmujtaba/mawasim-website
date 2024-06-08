import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Footer from 'components/Footers/Footer';
import HomeNavbar from 'components/Navbars/HomeNavbar.js';
import Header from '../../components/Header.js';

class EsharaStudio extends React.Component {
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
            title="Eshara Studio"
            description="Crafting Creative Excellence."
          />
          <section className="section section-lg py-5">
            <Container>
              <Row className='d-flex align-items-center'>
                <Col lg="5" className="">
                  <img className="img-fluid" alt="eshara" src={require("assets/img/logos/eshara_studio.png")} />
                </Col>
                <Col lg="7" className="">
                  <div className="">
                    <div>
                      <h2 className="section-title">
                        <span className="bg-mawasim text-white px-3 py-1">Eshara </span> Studio
                      </h2>
                    </div>
                    <div className="mt-5">
                      At Eshara Studio, we specialize in creating high-quality, engaging content that
                      captivates audiences and elevates brands. Our team of creative professionals is
                      dedicated to producing innovative media solutions tailored to your unique needs.
                      Whether you're looking for video production, graphic design, or digital marketing,
                      Eshara Studio is your go-to partner for all things creative.
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

export default EsharaStudio;
