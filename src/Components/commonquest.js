import React from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import Questions from './questions'

export class CommonQuest extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }


    render() {

        return (
            <div>
                <strong style={{fontSize:"175%", color:"#003300"}}>COMMON QUESTIONS</strong>
                <div >
                    <Questions/>
                    <Button id="toggler" onClick={this.toggle} ><strong style={{marginLeft:"5px"}}>Do you accommodate dietary preferences?</strong></Button>
                    <Collapse isOpen={this.state.collapse} id="drop">
                        <Card>
                            <CardBody>
                                We accommodate a variety of dietary preferences, and our entire menu is gluten– and peanut–free.
                                As a customer, you’re able to set your dietary preferences to find the meals that work for you.
                                So whether you’re paleo or vegetarian, you’ll always have some options to work with.
                                If you have very specific dietary preferences, you can check out individual ingredient
                                lists for each dish or contact us at support@freshly.com and we can help you select your meals!
                                If you’re unable to find dishes that fit your preferences, be sure to check back frequently as
                                we’re always adding in new, exciting dishes. On average, our weekly rotation of 30+ dishes includes:
                                <ul>
                                    <li>Under 500 calories: 20+ meals</li>
                                    <li>Under 35 grams of carbs: 8–10 meals</li>
                                    <li>Dairy–free: 8–10 meals</li>
                                    <li>Paleo–friendly: About 4 meals</li>
                                    <li>Vegetarian: About 4</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <Button id="toggler" onClick={this.toggle} ><strong style={{marginLeft:"5px"}}>How long do the meals last?</strong></Button>
                    <Collapse isOpen={this.state.collapse} id="drop">
                        <Card>
                            <CardBody>
                                You won’t find any artificial or chemical preservatives here so all of our freshly-prepared
                                meals have a refrigerated shelf life of about 4-5 days.
                                You can find a “use by” date on the back of each meal on the nutrition label.
                                If you’re ever unable to finish your meals within their shelf life,
                                you can always pop them into the freezer for extended storage.
                                Just be sure to microwave your meal straight from the freezer and add a few extra
                                minutes to reach the 165° F internal temperature we recommend.
                            </CardBody>
                        </Card>
                    </Collapse>
                    <Button id="toggler" onClick={this.toggle} ><strong style={{marginLeft:"5px"}}>How do I heat up my meals?</strong></Button>
                    <Collapse isOpen={this.state.collapse} id="drop">
                        <Card>
                            <CardBody>
                                Your meals will come to you fully prepared so you just have to heat ‘em up in the microwave.
                                On the back of each meal, you’ll find our easy steps for heating, but generally,
                                the meals heat up in about 3 minutes (depending on your microwave). If you’re unsure,
                                start at 2 minutes and heat in 30–second increments until the meal reaches an inner
                                temperature of 165° F. Our meals are packaged to be heated in the microwave (for the ultimate convenience),
                                but you can heat them in the oven if you’d like. Just so you know, our current meal
                                containers aren’t safe for the oven or stovetop, so you’ll have to transfer your food
                                to heat it up. You can check out the full oven reheat directions in our FAQ.
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>


        );
    }
}

export default CommonQuest;