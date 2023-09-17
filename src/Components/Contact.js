import React, { Component } from "react";
import "./Contact.css";
//src/Components/
import { Fade, Slide } from "react-awesome-reveal";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    return (
      <div>
        <div>
          <Container>
            <Row
              className="vh-100 justify-content-center align-items-center"
              style={{ maxHeight: "720px" }}
            >
              <Col md={8} lg={6} xs={12}>
                <Slide>
                  <Card
                    className="px-4 my-div"
                    style={{ backgroundColor: "rgb(117 120 199 / 37%)" }}
                  >
                    <Card.Body>
                      <div className="mb-3 mt-md-4">
                        <h2 className="fw-bold mb-2 text-warning text-center">
                          Contact me
                        </h2>
                        <div className="mb-3">
                          <Form>
                            <Fade cascade damping={0.5}>
                              <Form.Group className="mb-3" controlId="Name">
                                <Form.Label className="text-center text-light ">
                                  Name
                                </Form.Label>
                                <Form.Control
                                  className="bg-transparent  border-warning"
                                  type="text"
                                  placeholder="Enter Name"
                                />
                              </Form.Group>

                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label className="text-center text-light">
                                  Email address
                                </Form.Label>
                                <Form.Control
                                  className="bg-transparent border-warning"
                                  type="email"
                                  placeholder="Enter email"
                                />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label className="text-center text-light">
                                  Message
                                </Form.Label>
                                <Form.Control
                                  className="bg-transparent border-warning"
                                  type="text"
                                  placeholder="Enter text here"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                              ></Form.Group>
                              <div className="d-grid">
                                <Button variant="primary" type="submit">
                                  Send <FaPaperPlane className="pl-5" />
                                </Button>
                              </div>
                            </Fade>
                          </Form>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Slide>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
