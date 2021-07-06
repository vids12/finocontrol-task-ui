import "./Web.css";

export function Web() {
    return (
        <div className="web">
            <div className="web-image">
                <div className="web-image-inner-border"></div>
                <div className="web-box"></div>
            </div>
            <div className="web-middle-section">
                <p className="value">INVESTMENT BANKING | TECHNOLOGY</p>
                <h4 className="webinar-heading">How VC Funds Evaluate SaaS Businesses</h4>
                <div>
                    <p className="host">By <strong>Abhilasha Mishra,IIMA,Sisterna Asia Capital</strong></p>
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
                <ul className="detail">
                    <li>Premium</li>
                    <li>Sat 10th Jul 2021</li>
                    <li>4:00 - 6:00 (2 hrs)</li>
                </ul>
            </div>
            <div className="price-btn-div">
                <div className="price-div">
                    <h4 className="discounted-price">Rs.500</h4>
                    <h5 className="original-price">Rs.700</h5>
                </div>
                <button className="primary-btn">Reserve Spot Today<i className="fa fa-arrow-right" aria-hidden="true"></i></button>     
            </div>
        </div>
    );
}