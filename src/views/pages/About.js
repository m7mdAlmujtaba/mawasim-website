import SimpleFooter from 'components/Footers/SimpleFooter';
import MainNavbar from 'components/Navbars/MainNavbar';
import React from 'react';

// Sections
import Header from '../AboutSections/Header.js';
import WhoWeAre from 'views/AboutSections/WhoAreWe.js';
class About extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MainNavbar />
        <main ref="main">
  
          <Header />

          <WhoWeAre />
  
        </main>
        <SimpleFooter />
      </>
    );
  }
};

export default About;
