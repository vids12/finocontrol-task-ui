import { contentData,ContentAccordion } from "..";

export function Content() {
    return (
        <div id="content">
            <h1 className="landing-page-title overview">
                Course Content
                <div className="overview-box"></div>
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