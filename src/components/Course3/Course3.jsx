import "../Course1/Course1.css";

export function Course3() {
    return (
        <div className="course1">
            <div>
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="course-image"alt="o" />
                <div className="inner-border"></div>
            </div>
            <p className="value">ANALYSIS | CAPITAL MARKETS | CREDIT</p>
            <section>
                <h4 className="heading">Credit Analysis Certification</h4>
                <ul className="course-list">
                    <li>The most comprehensive course on Credit Analysis in India</li>
                    <li>Live Project with FinShiksha</li>
                </ul>
            </section>
        </div>
    );
}