import { TrainerDetail } from "..";

export function Instructor() {
    return (
        <div className="instructor primary-section-component" id="instructor">
            <h1 className="landing-page-title">
                About the Instructor
                <div className="box"></div>
            </h1>
            <section>
                <TrainerDetail />  
                <TrainerDetail />              
            </section>
        </div>
    );
}