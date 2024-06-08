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
} from "reactstrap";

// core components

class ListenToMawasim extends React.Component {

    render() {
        return (
            <>
                <Container className="listen-to-mawasim">
                    <Row>
                        <Col lg="5" className="p-5">
                            <img src={require("assets/img/main/fields.jpg")} alt="Wheat Fields" className="img-fluid leaf-shape-left" />


                        </Col>
                        <Col lg="7" className="p-5">
                            <div className="">
                                <div>
                                    <h2 className="section-title">
                                    Tune Into the Best in <span className="bg-mawasim text-white px-3 py-1">Agriculture</span> with Mawasim Podcasting
                                    </h2>
                                </div>
                                <div className="mt-5">
                                    Mawasim podcasting is a Sudanese agri-business media platform,
                                    no matter where you're from or what you do, surely you have a
                                    "mini work" to do each week connected to the farming or rural activities.
                                    Whether it's spreading the crops news, harvesting, manure, electricity,
                                    Cattel's food, water solutions' troughs, or trucks transportation,
                                    you have some time where you can throw in some headphones and think
                                    about whatever you want to and perhaps even listen to some of the best
                                    agriculture podcasts around your
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ListenToMawasim;
