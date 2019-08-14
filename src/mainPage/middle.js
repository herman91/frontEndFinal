import React from "react";
import "../css/middle.css"
import Dropdown from "reactstrap/es/Dropdown";




export class middle extends React.Component {
    render() {
        return (
            <div>
                <h2>HOW WE WORKS</h2>
                <div className="card-group">

                    <div className="card">
                        <img
                            src="https://res.cloudinary.com/freshly/image/upload//v1494958610/icon_menu_axd6bg.gif"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Choose your meals</h5>
                            <p className="card-text">30+ menu of all-natural dishes.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://res.cloudinary.com/freshly/image/upload//v1494958610/icon_cook_deliver_r5wfba.gif"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">We cook & deliver</h5>
                            <p className="card-text">Cooked by chefs and sent fresh.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://res.cloudinary.com/freshly/image/upload//v1494958610/icon_heat_vewi7n.gif"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">You heat ‘em up</h5>
                            <p className="card-text"> Ready to eat in 3 minutes.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://res.cloudinary.com/freshly/image/upload//v1494958610/icon_eat_repeat_g9us9u.gif"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Eat & repeat</h5>
                            <p className="card-text">Skip a week or cancel any time.</p>
                        </div>
                    </div>


                </div>
                <button type="button" style={{width : "38%"}} className="btn btn-outline-success">GET START</button>
            </div>

        );
    }
}

export default middle
