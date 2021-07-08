import { Badge } from "../Badge/Badge";
import "./Course1.css";

export function Course1() {
    return (
        <div className="course1">
            <div className="parent">
                <img src="https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyYXBofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="course-pic-1" className="course-image" />
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