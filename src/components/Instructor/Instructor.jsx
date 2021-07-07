import "./Instructor.css";
import { TrainerDetail } from "..";

export function Instructor() {
    return (
        <div className="instructor">
            <h1 className="landing-page-title">
                About the Instructor
                <div className="overview-box"></div>
            </h1>
            <section>
                <TrainerDetail />  
                <TrainerDetail />              
            </section>
        </div>
    );
}