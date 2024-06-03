import React from 'react';
import { Container} from 'reactstrap';
import SimpleFooter from 'components/Footers/SimpleFooter';
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
            description="Mawasim Production is an economic media house operating in Sudan."
          />
          <section className="section section-lg py-5">
            <Container>
             
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default EsharaStudio;
