import "./Sidebox.css";

export function Sidebox() {
    return (
        <div className="sidebox">
            <h2>This Course Includes</h2>
            <ul className="sidebox-list">
                <li>
                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                    70 hours of videos | 10 Live sessions
                </li>
                <li>
                    <i className="fa fa-hourglass" aria-hidden="true"></i>
                    About 150 hours of effort needed
                </li>
                <li>
                    <i className="fa fa-file" aria-hidden="true"></i>
                    100+ articles, case studies
                </li>
                <li>
                    <i className="fa fa-th-list" aria-hidden="true"></i>
                    Self-evaluation test at the beginning of the course
                </li>
                <li>
                    <i className="fa fa-book" aria-hidden="true"></i>
                    4 Live Projects
                </li>
                <li>
                    <i className="fa fa-certificate" aria-hidden="true"></i>
                    Certification Test at the end of each Course
                </li>
                <li>
                    <i className="fa fa-calendar" aria-hidden="true"></i>   
                    1 year Access
                </li>
            </ul>
        </div>
    );
}