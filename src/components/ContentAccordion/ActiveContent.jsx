import "./ContentAccordion.css";

export function ActiveContent({content}){
    return (
        <div className="accordion-content active-content">
            <i class="fa fa-file" aria-hidden="true"></i>
            <p>{content}</p>
            <button className="content-btn">Download</button>
        </div>
    );
}