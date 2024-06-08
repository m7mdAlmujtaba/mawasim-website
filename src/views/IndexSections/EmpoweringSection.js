import React from "react";
import { Col, Container, Row } from "reactstrap";

class EmpoweringSection extends React.Component {
    render(){
        return(
            <>
            
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
        )
    }
}

export default EmpoweringSection;