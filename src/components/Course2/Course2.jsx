import { Badge } from "../Badge/Badge";
import "../Course1/Course1.css";

export function Course2() {
    return (
        <div className="course1">
            <div className="course-image image-2">
                <div className="inner-border"></div>
                <div className="course-badge"><Badge text="Bestseller" /></div>
            </div>
            <p className="value">CAPITAL MARKETS | VALUATION</p>
            <section>
                <h4 className="heading">Investment Banking Certification</h4>
                <ul className="course-list">
                    <li>Peek into the world of IB,PE,VC</li>
                    <li>Live Project with FinShiksha</li>
                    <li>Valuation of startups,M&A</li>
                </ul>
            </section>
        </div>
    );
}