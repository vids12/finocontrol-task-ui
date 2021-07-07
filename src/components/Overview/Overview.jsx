import "./Overview.css";

export function Overview() {
    return (
        <div className="overview">
            <h1 className="landing-page-title">
                Overview
                <div className="overview-box"></div>
            </h1>
            <h4 className="program-heading">Program Duration: 15th Jan 2021 - 31st May 2021</h4>
            <p className="program-detail">Register Now!!!</p>
            <p className="program-detail">The following courses are part of this program</p>
            <section> 
                <ul className="program-list">
                    <h4 className="program-heading">4 Mandatory Courses</h4>
                    <li className="program-detail">Applied Financial Statement Analysis Certification</li>
                    <li className="program-detail">Equity Valuation Certification</li>
                    <li className="program-detail">Investment Banking Certification</li>
                    <li className="program-detail">Credit Analysis Certification</li>
                </ul>
            </section>
            <section>
                <ul className="program-list">
                    <h4 className="program-heading">2 Optional Courses, (participant can choose any  2 courses)</h4>
                    <li className="program-detail">Financial Modeling Certification</li>
                    <li className="program-detail">Applied Derivatives Certification</li>
                    <li className="program-detail">Applied Economics Certification</li>
                    <li className="program-detail">Finance Essentials - Banking & Marketd Certification</li>
                </ul>
                <p className="program-detail">Each Mandatory Course will have: </p>
                <ul className="program-list">
                    <li className="program-detail">1 Certification Test</li>
                    <li className="program-detail">1 Live Project</li>
                </ul>
            </section>
            <section>
                <h4 className="program-heading">Live sessions (10 sessions)</h4>
                <ul className="program-list">
                    <li className="program-detail">Key concepts</li>
                    <li className="program-detail">Project Discussions</li>
                    <li className="program-detail">Live Cases</li>
                    <li className="program-detail">Student Queries</li>
                </ul>
            </section>
            <section>
                <ul className="program-list">
                    <li className="program-detail">2 Group interactions with mentors, in a batch of 8-10</li>
                    <li className="program-detail">1 one-on-one interaction with an industry mentor</li>
                </ul>
            </section>
        </div>
    );
}