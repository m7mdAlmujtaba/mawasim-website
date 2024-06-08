import Footer from 'components/Footers/Footer';
import HomeNavbar from 'components/Navbars/HomeNavbar.js';
import React from 'react';

// Sections
import Header from '../../components/Header.js';
import WhoWeAre from 'views/AboutSections/WhoAreWe.js';
import CallToAction from 'views/AboutSections/CallToAction.js';
class About extends React.Component {
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
            title="About Us"
            description="Mawasim Production is an economic media house operating in Sudan."
          />

          <WhoWeAre />

          <CallToAction />

        </main>
        <Footer />
      </>
    );
  }
};

export default About;
