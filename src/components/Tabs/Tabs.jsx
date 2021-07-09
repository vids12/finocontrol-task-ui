import { Link } from "react-scroll";
import "./Tabs.css";

export function Tabs() {
    return (
        <ul className="tabs">
                <li>
                    <Link activeClass="active" to="overview" spy={true} offset={-100} smooth={true}   duration={400}>
                        Overview
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="outcomes" spy={true} offset={-100} smooth={true}duration={500}>
                        Outcomes
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="instructor" spy={true} offset={-100} smooth={true}duration={500}>
                        Instructor
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="benefits" spy={true} offset={-100} smooth={true}duration={500}>
                        Benefits
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="requirements" spy={true} offset={-100} smooth={true}duration={500}>
                        Requirements
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="content" spy={true} offset={-100} smooth={true}duration={500}>
                        Content
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="brochure" spy={true} offset={-100} smooth={true}duration={500}>
                        Brochure
                    </Link>
                </li>
                <li>
                    <Link activeClass="active"
                        to="certificate" spy={true} offset={-100} smooth={true}duration={500}>
                        Certificate
                    </Link>
                </li>
                <li><Link activeClass="active"
                        to="faqs" spy={true} offset={-100} smooth={true}duration={500}>
                        FAQs
                    </Link>
                </li>
        </ul>
    );
}