/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import {
    Container,
    Row,
    Col,
    Button,
} from "reactstrap";
import LogoCarousel from "./LogoCarousel";
import BlogList from "../BlogSections/BlogList";
//import PodcastPrograms from "./PodcastPrograms";
import ListenToMawasim from "./ListenToMawasim";
import AboutSection from "./AboutSection";

// core components

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: [
                require('assets/img/logos/partners/acts.jpeg'),
                require('assets/img/logos/partners/afia.jpeg'),
                require('assets/img/logos/partners/mahsool.png'),
                require('assets/img/logos/partners/sharek.jpeg'),
            ],
            clients: [
                require('assets/img/logos/clients/coco.jpeg'),
                require('assets/img/logos/clients/centerfood.jpeg'),
                require('assets/img/logos/clients/haggania.jpeg'),
                require('assets/img/logos/clients/livar.jpeg'),
                require('assets/img/logos/clients/maer.jpeg'),
                require('assets/img/logos/clients/nile.jpeg'),
                require('assets/img/logos/clients/shonat.jpeg'),
                require('assets/img/logos/clients/xenon.jpeg'),
            ]

        };
    }

    render() {
        return (
            <>

                {/* Section */}
                <section className="section my-0">
                    <ListenToMawasim />
                </section>

                {/* Partners Section */}
                <section className="section my-5">
                    <LogoCarousel images={this.state.partners} title={'Partners'} />
                </section>

                {/* About Section */}
                <section className="section my-5">
                    <AboutSection />
                </section>

                {/* Blog List Section */}
                <section className="section my-5">
                    <div className="text-center mb-5">
                        <h3 className="section-title text-uppercase"> <span className="bg-mawasim text-white px-3 py-1">Articles</span> and Publications </h3>
                    </div>
                    <BlogList numberOfPosts={3} />
                    <div className="text-center">
                        <Button color="mawasim" href={`/blog`}>
                            View All Articles
                        </Button>
                    </div>
                </section>



                {/* Clients Section */}
                <section className="section my-5">
                    <LogoCarousel images={this.state.clients} title={'Clients'} />
                </section>



                {/* Section */}
                <section className="section bg-gradient-mawasim">
                    <Container className="pt-lg pb-50">
                        <Row className="text-center justify-content-center">
                            <Col lg="10">
                                <h2 className="section-title text-white">Empowering Sudan's Economy</h2>
                                <p className="lead text-white">
                                    At Mawasim, we focus on enhancing Sudan's economic, social, and cultural landscape through innovative media solutions and insightful dialogues.
                                </p>
                            </Col>
                        </Row>
                        <Row className="row-grid mt-5">
                            <Col lg="4">
                                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-mawasim ">
                                    <i className="fa fa-microphone text-mawasim " />
                                </div>
                                <h5 className="text-white mt-3">Radio Mawasim</h5>
                                <p className="text-white mt-3">
                                    Explore the agricultural sector with insightful programs and dialogues featuring industry pioneers.
                                </p>
                            </Col>
                            <Col lg="4">
                                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-mawasim ">
                                    <i className="ni ni-collection text-mawasim " />
                                </div>
                                <h5 className="text-white mt-3">Mawasim Media</h5>
                                <p className="text-white mt-3">
                                    Blend entertainment with news and stories about Sudan's social and economic conditions, adding diversity to our media scene.
                                </p>
                            </Col>
                            <Col lg="4">
                                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-mawasim ">
                                    <i className="ni ni-camera-compact text-mawasim " />
                                </div>
                                <h5 className="text-white mt-3">Eshara Studio</h5>
                                <p className="text-white mt-3">
                                    Offering top-notch artistic and digital production services, including business tourism documentation and campaign management.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section>


            </>
        );
    }
}

export default Main;
