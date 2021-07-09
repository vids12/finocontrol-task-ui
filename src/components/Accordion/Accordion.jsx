import { useState } from "react";
import "./Accordion.css";

export function Accordion({title,content}) {
    const [ isActive,setIsActive ] = useState(false);
    return (
        <div className="accordion">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <div>{title}</div>
            <div className="sign">{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
}