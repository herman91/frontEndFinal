import React from 'react';
import Slide from '../Components/Slide.js'
import Middle from '../mainPage/middle'
import '../css/HomePage.css'
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';


function HomePage() {
    return (
        <div className="HomePage">


            <div className="sands" style={{position:"relative"}}>
                <Slide/>
                <div className="sign">
                    <strong>StarFood</strong>
                </div>
                <div className="sign2">
                    <strong>Faster than you can imagine</strong>
                </div>
            </div>
            <div className="row">
                <div className="col-1">
                </div>
                <div className="col-10">
                    <Middle/>
                </div>
                < div className="col-1">
                </div>
            </div>


                <div  style={{position:"relative"}}>
                    <div className="middle_img">
                    </div>
                    <Card className='CardB'>
                        <CardBody>
                            <CardTitle><strong>High quality</strong></CardTitle>
                            <CardSubtitle>Professional Team</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Create Order</Button>
                        </CardBody>
                    </Card>
                </div>


        </div>

    );
}

export default HomePage;

