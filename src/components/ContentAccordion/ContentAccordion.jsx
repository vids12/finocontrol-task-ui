import { useState } from "react";
import { ActiveContent } from "./ActiveContent";
import "./ContentAccordion.css";

export function ContentAccordion({title,content}) {
    const [ isActive,setIsActive ] = useState(false);
    return (
        <div className="content-accordion">
            <div className="content-title-div" onClick={()=>setIsActive(!isActive)}>
                <div className="sign">{isActive ? "-" : "+"}</div>
                <div>{title}</div>
            </div>
            {
                isActive && <ActiveContent content={content} />
            }
        </div>
    );
}