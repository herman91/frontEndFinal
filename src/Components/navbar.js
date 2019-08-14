import React from "react";
import "../css/navbar.css"


export class Navbar extends React.Component {
    render() {
        return (
            <nav
                className="navbar navbar-expand-lg navbar navbar-dark bg-dark">




                <div
                    className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav   mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Our menu
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Plans
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li
                            className="nav-item"
                            style={{
                                border: "none"
                            }}>
                            <a className="nav-link" href="#">
                                Help
                            </a>
                        </li>
                        <li
                            className="nav-item"
                            style={{
                                border: "none"
                            }}>

                        </li>
                    </ul>
                </div>

                <a className="navbar-brand" href="#">
                    myStore
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    style={{
                        width: "115px"
                    }}>
                    <strong>Your Cart</strong>
                    <i className="fas fa-shopping-cart" />

                </button>
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                    style={{
                        width: "115px",
                        marginLeft: "4px"
                    }}>
                    <strong>Login</strong>
                </button>
            </nav>
        );
    }
}
 export default Navbar