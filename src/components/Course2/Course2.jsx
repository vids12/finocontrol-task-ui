import { Badge } from "../Badge/Badge";
import "../Course1/Course1.css";

export function Course2() {
    return (
        <div className="course1">
            <div className="parent">
                <img src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFncmVlbWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" className="course-image"alt="o" />
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