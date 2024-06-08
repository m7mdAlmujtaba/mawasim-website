import React from "react";
import {
  Button,
  Modal,
  Row,
  Col,
  UncontrolledTooltip,
  Table
} from "reactstrap";

class ContactModal extends React.Component {

  state = {};

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard`);
  };

  render() {
    const { buttonColor, buttonShape, buttonText } = this.props;
    return (
      <>
        <div>
          <Button
            outline={buttonShape === "outline"}
            className="btn-1 px-5"
            color={buttonColor}
            size="lg"
            onClick={() => this.toggleModal("contactModal")}
          >
            {buttonText? buttonText : 'Contact Us'}
            
          </Button>
          <Modal
            className="modal-dialog-centered modal-mawasim"
            contentClassName="bg-gradient-mawasim"
            isOpen={this.state.contactModal}
            toggle={() => this.toggleModal("contactModal")}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="contactModalLabel">
                Get in Touch
              </h5>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("contactModal")}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="py-3">
                <h4 className="heading mt-4">Mawasim Media</h4>
                <p>Contact us through any of the following platforms:</p>
                <Row className="justify-content-left">
                  <Col md="12">
                    <div className="contact-info">
                      <Table className="table-no-border text-white">
                        <tbody>
                          <tr>
                            <td className="p-2"><i className="fa fa-map-marker" /> Address:</td>
                            <td className="p-2">123 Mawasim Street, Khartoum, Sudan</td>
                            <td className="p-2">
                              <Button
                                size="sm"
                                color="white"
                                onClick={() => this.copyToClipboard("123 Mawasim Street, Khartoum, Sudan")}
                              >
                                <i className="fa fa-copy" />
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2"><i className="fa fa-envelope" /> Email:</td>
                            <td className="p-2">contact@mawasim.com</td>
                            <td className="p-2">
                              <Button
                                size="sm"
                                color="white"
                                onClick={() => this.copyToClipboard("contact@mawasim.com")}
                              >
                                <i className="fa fa-copy" />
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-2"><i className="fa fa-phone" /> Phone:</td>
                            <td className="p-2">+249 123 456 789</td>
                            <td className="p-2">
                              <Button
                                size="sm"
                                color="white"
                                onClick={() => this.copyToClipboard("+249 123 456 789")}
                              >
                                <i className="fa fa-copy" />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <div className="social-links mt-4">
                        <Button
                          id="tooltipTwitter"
                          className="btn-icon-only rounded-circle"
                          color="twitter"
                          href="https://twitter.com/mawasim"
                          target="_blank"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-twitter" />
                          </span>
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltipTwitter">
                          Follow us on Twitter
                        </UncontrolledTooltip>
                        <Button
                          id="tooltipFacebook"
                          className="btn-icon-only rounded-circle ml-1"
                          color="facebook"
                          href="https://www.facebook.com/mawasim"
                          target="_blank"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-facebook" />
                          </span>
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltipFacebook">
                          Like us on Facebook
                        </UncontrolledTooltip>
                        <Button
                          id="tooltipInstagram"
                          className="btn-icon-only rounded-circle ml-1"
                          color="instagram"
                          href="https://www.instagram.com/mawasim"
                          target="_blank"
                        >
                          <span className="btn-inner--icon">
                            <i className="fa fa-instagram" />
                          </span>
                        </Button>
                        <UncontrolledTooltip delay={0} target="tooltipInstagram">
                          Follow us on Instagram
                        </UncontrolledTooltip>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                type="button"
                onClick={() => this.toggleModal("contactModal")}
              >
                Close
              </Button>
            </div>
          </Modal>
        </div >
      </>
    );
  }
}

export default ContactModal;
