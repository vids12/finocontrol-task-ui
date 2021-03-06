import "./Faqs.css";
import {Accordion,faqData } from "..";

export function Faqs() {
    return (
        <div className="faqs primary-section-component" id="faqs">
            <h1 className="landing-page-title">
                FAQs
                <div className="box"></div>
            </h1>
            <div className="faqs-accordion">
                {
                    faqData.map(({title,content})=>{
                        return <Accordion title={title} content={content} />
                    })
                }
            </div>
        </div>
    );
}