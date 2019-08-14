import React, { Component } from 'react';
import '../css/questions.css'

import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Questions extends Component {
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
                <Button id="toggler" onClick={this.toggle} ><strong style={{marginLeft:"5px"}}>How many portions are your meals?</strong></Button>
                <Collapse isOpen={this.state.collapse} id="drop">
                    <Card>
                        <CardBody>
                            All of our meals are single serving and meant to feed an average adult.
                            Our 6-meal plan is perfect for a person looking for 6 dinners (or lunches!) a week.
                            On average, our meals weigh in at just about 13 ounces, which is about 10% larger than similar competitors.
                            What’s even better: our meals average just 500 calories and range from 300 to 650 calories.
                            If you have a larger household, we do offer a 12 meal per week subscription (it’s perfect for a family of 4 looking for 3 meals per week).
                            Plus, you can always order multiple subscriptions.
                        </CardBody>
                    </Card>
                </Collapse>


            </div>


        );
    }
}


export default Questions;