import React from "react";
import "../css/footer.css"


export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="alert alert-light" role="alert">
                        <strong className="footerButton">©StarFood2019</strong> <a href="/termsConditions" class="alert-link">Terms and Conditions</a> <a href="#" class="alert-link">Privacy</a> <a href="#" class="alert-link">Accessibility</a>
                </div>

            </div>


        );
    }
}
export default Footer