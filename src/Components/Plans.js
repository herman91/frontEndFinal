import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/Plans.css'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
import { Media } from 'reactstrap';
import CommonQuest from './commonquest'

function Plans() {
    return (
        <div>
            <div className="top">
                <Row>                    <Col className="planCol"></Col>
                    <Col Col xs="5" className="planCol"><div ><h2><strong className="ourPlans">OUR PLANS</strong></h2></div></Col>
                    <Col className="planCol"></Col>
                </Row>
                <Row>
                    <Col className="planCol"></Col>
                    <Col Col xs="5" className="planCol"><div className="PlansSecond">Each Freshly meal is one serving, for one person, at one sitting.</div></Col>
                    <Col className="planCol">.</Col>
                </Row>
                <Row>
                    <Col className="planCol"></Col>
                    <Col Col xs="5" className="planCol">
                        <div style={{display:'flex'}}>
                            <div className="picture1" style={{ width:'30%',height:'150px',display:"block",margin:'auto'}}></div>
                            <div className="picture2" style={{ width:'30%',height:'150px',display:"block",margin:'auto'}}></div>
                            <div className="picture3" style={{ width:'30%',height:'150px',display:"block",margin:'auto'}}></div>
                        </div>

                    </Col>
                    <Col className="planCol"></Col>
                </Row>
            </div>


            <Row>
                <Col className="planCol"></Col>
                <Col Col xs="10" ><div className="centralCards">
                    <CardGroup>
                        <Card >

                            <CardBody className="plansCard">
                                <CardTitle><strong>4</strong></CardTitle>
                                <CardSubtitle>meals per week</CardSubtitle>
                                <CardText>
                                    <strong>
                                        $12.50 / meal
                                        <p> $49.99 / week</p>
                                    </strong>

                                </CardText>
                                <Button>CHOOSE 4 MEALS / WEEK</Button>
                            </CardBody>
                        </Card>

                        <Card >

                            <CardBody className="plansCard">
                                <CardTitle><strong>4</strong></CardTitle>
                                <CardSubtitle>meals per week</CardSubtitle>
                                <CardText>
                                    <strong>
                                        $12.50 / meal
                                        <p> $49.99 / week</p>
                                    </strong>

                                </CardText>
                                <Button>CHOOSE 4 MEALS / WEEK</Button>
                            </CardBody>
                        </Card>

                        <Card >

                            <CardBody className="plansCard">
                                <CardTitle><strong>4</strong></CardTitle>
                                <CardSubtitle>meals per week</CardSubtitle>
                                <CardText>
                                    <strong>
                                        $12.50 / meal
                                        <p> $49.99 / week</p>
                                    </strong>

                                </CardText>
                                <Button>CHOOSE 4 MEALS / WEEK</Button>
                            </CardBody>
                        </Card>

                        <Card >

                            <CardBody className="plansCard">
                                <CardTitle><strong>4</strong></CardTitle>
                                <CardSubtitle>meals per week</CardSubtitle>
                                <CardText>
                                    <strong>
                                        $12.50 / meal
                                        <p> $49.99 / week</p>
                                    </strong>

                                </CardText>
                                <Button>CHOOSE 4 MEALS / WEEK</Button>
                            </CardBody>
                        </Card>

                        <Card >

                            <CardBody className="plansCard">
                                <CardTitle><strong>4</strong></CardTitle>
                                <CardSubtitle>meals per week</CardSubtitle>
                                <CardText>
                                    <strong>
                                        $12.50 / meal
                                        <p> $49.99 / week</p>
                                    </strong>

                                </CardText>
                                <Button>CHOOSE 4 MEALS / WEEK</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>


                </div></Col>
                <Col className="planCol">.</Col>
            </Row>
            <div >
                <CommonQuest/>

            </div>
        </div>
    );
}

export default Plans;
