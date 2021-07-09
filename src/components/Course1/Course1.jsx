import { Badge } from "../Badge/Badge";
import "./Course1.css";

export function Course1() {
    return (
        <div className="course1">
            <div className="course-image image-1">
                <div className="inner-border"></div>
                <div className="course-badge"><Badge text="Bestseller" /></div>
            </div>
            <p className="value">CAPITAL MARKETS | VALUATION</p>
            <section>
                <h4 className="heading">Equity Valuation Certification</h4>
                <ul className="course-list">
                    <li>Learn Practical Aspects of Equity Valuation</li>
                    <li>Build Valuation  Models on 3 different listed companies</li>
                </ul>
            </section>
        </div>
    );
}