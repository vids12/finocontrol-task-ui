import { contentData,ContentAccordion } from "..";

export function Content() {
    return (
        <div id="content" className="primary-section-component">
            <h1 className="landing-page-title overview">
                Course Content
                <div className="box"></div>
            </h1>
            <div>
                {
                    contentData.map(({title,content})=>{
                        return <ContentAccordion title={title} content={content} />
                    })
                }
            </div>
        </div>
    );
}