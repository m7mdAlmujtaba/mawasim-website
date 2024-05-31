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
    Badge,
    Button,
    Card,
    CardImg,
    Container,
    Row,
    Col,
} from "reactstrap";
import LogoCarousel from "./LogoCarousel";
import BlogList from "./BlogList";

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

                {/* About Section */}
                <section className="section my-5">
                    <Container>
                        <Row className="row-grid align-items-center">
                            <Col md="6">
                                <Card className="bg-default shadow border-0">
                                    <CardImg
                                        alt="..."
                                        src={require("assets/img/main/model-mic.jpg")}
                                        top
                                    />
                                    <blockquote className="card-blockquote">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="svg-bg"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 583 95"
                                        >
                                            <polygon
                                                className="fill-default"
                                                points="0,52 583,95 0,95"
                                            />
                                            <polygon
                                                className="fill-default"
                                                opacity=".2"
                                                points="0,42 583,95 683,0 0,95"
                                            />
                                        </svg>
                                        <h4 className="display-3 font-weight-bold text-white">
                                            Your Partners
                                        </h4>
                                        <p className="lead text-italic text-white">
                                            Regardless of your business size, market challenges will arise.
                                            At Mawasim, we're your partner for effective media and marketing solutions.
                                            Meet our team today.
                                        </p>
                                    </blockquote>
                                </Card>
                            </Col>
                            <Col md="6">
                                <div className="pl-md-5">

                                    <h3 className="section-title text-uppercase">About Mawasim</h3>
                                    <p className="">
                                        Whether you are a large organization, a medium company,
                                        or a small store, challenges regarding your business
                                        position in the market, identity, stunted growth)
                                        will confront you one day, and you will find that one
                                        of these statements is true in some way to you and another
                                        is almost true! Well, at Mawasem, we always introduce ourselves
                                        as (your closest partner, for effective media and marketing solutions),
                                        We plan to be more than partners... in more than one journey.
                                        Get to know the work team now.
                                    </p>

                                    <Button
                                        className="btn-1 ml-1"
                                        color="mawasim"
                                        outline
                                        type="button"
                                    >
                                        Get In Touch Now
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Section */}

                <section className="section my-0">
                    <Container>
                        <Row className="row-grid align-items-center">
                            <Col className="order-md-2" md="4">
                                <img
                                    alt="..."
                                    className="img-fluid floating"
                                    src={require("assets/img/main/mic.png")}
                                />
                            </Col>
                            <Col className="order-md-1" md="8">
                                <div className="pr-md-5">
                                    <h2 className="section-title text-uppercase">Podcast Programs</h2>
                                    <p>
                                        Explore our diverse range of podcast programs designed to keep you informed and entertained.
                                    </p>
                                    <ul className="list-unstyled mt-2">
                                        <li className="py-1">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge className=" mr-3" color="default">
                                                        *
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Colncol - Advertising window for market trends</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-1">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge className=" mr-3" color="default">
                                                        *
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Al-Fattah - Practical visits to industry services</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-1">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge className=" mr-3" color="default">
                                                        *
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Call in Door - Talk show with stakeholders and decision-makers</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-1">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge className=" mr-3" color="default">
                                                        *
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Haseb Ba3deen - Short videos on latest technologies</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-1">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge className=" mr-3" color="default">
                                                        *
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Bucky - Short entertainment content on specific issues</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-1">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge className=" mr-3" color="default">
                                                        *
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Kalmo - Khashm Al-Souk, following agricultural and commercial seasons</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-1">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge className=" mr-3" color="default">
                                                        *
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Seasons Events - Comprehensive coverage of seasonal events</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-1">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <Badge className=" mr-3" color="default">
                                                        *
                                                    </Badge>
                                                </div>
                                                <div>
                                                    <h6 className="mb-0">Nadeet - Social insights into the market</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Blog List Section */}
                <section className="section">
                    <BlogList />
                </section>

                {/* Partners Section */}
                <section className="section mb-5">
                    <LogoCarousel images={this.state.partners} />
                </section>

                {/* Clients Section */}
                <section className="section mb-5">
                    <LogoCarousel images={this.state.clients} />
                </section>



                {/* Section */}
                <section className="section bg-gradient-default">
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
                                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                    <i className="fa fa-microphone text-primary" />
                                </div>
                                <h5 className="text-white mt-3">Radio Mawasim</h5>
                                <p className="text-white mt-3">
                                    Explore the agricultural sector with insightful programs and dialogues featuring industry pioneers.
                                </p>
                            </Col>
                            <Col lg="4">
                                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                    <i className="ni ni-collection text-primary" />
                                </div>
                                <h5 className="text-white mt-3">Mawasim Media</h5>
                                <p className="text-white mt-3">
                                    Blend entertainment with news and stories about Sudan's social and economic conditions, adding diversity to our media scene.
                                </p>
                            </Col>
                            <Col lg="4">
                                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                    <i className="ni ni-camera-compact text-primary" />
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
