import React from "react";
const { Container, Row, Col, Badge } = require("reactstrap");

class PodcastPrograms extends React.Component {
    render() {
        return (
            <>
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
            </>
        );
    };
}

export default PodcastPrograms;