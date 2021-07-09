import "./Dropbox.css";
import { Link } from "react-router-dom";
import { changeDocTitle } from "../../utils/changeDocTitle";

export function Dropbox() {
    return (
        <div className="dropbox">
            <Link to="/finshiksha" onClick={()=>changeDocTitle("FinShiksha")}>FinShiksha</Link>
        </div>
    );
}