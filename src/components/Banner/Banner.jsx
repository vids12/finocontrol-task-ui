import "./Banner.css";

export function Banner() {
    return (
        <div className="banner">
            <div className="options">BANKING | CAPITAL MARKETS | CREDIT | VALUATION</div>
            <div className="price">Rs.29,000<span>/Incl Taxes</span></div>
            <button className="primary-btn">Registration Closed <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            <div className="line"></div>
            <div className="request-a-call">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p>Request a Call</p>
            </div>
        </div>
    );
}