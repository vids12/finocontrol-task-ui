import { CertificateDesign } from "..";
import "./Certificate.css";

export  function Certificate() {
    return (
        <div className="certificate">
            <div>
                <CertificateDesign />
            </div>
            <h1 className="landing-page-title">
                Certification
                <div className="overview-box"></div>
            </h1>
            <section>
                <p>
                    Each course will have an online assessment at the end of each Course. The final Certification will be an open Online test, which would be untimed, and open book. We would try and keep the assessment as close to a real life situation as possible, where you will have all the tools that you would have in real life at your disposal.
                </p>
                <p>
                    In addition, the course also has an optional live project, This will help you apply the concepts learnt into a real world example.
                </p>
                <p>
                    On successful completion of the Analyst Program, the student is awarded a Certificate of Completion for the entire Program.
                </p>
            </section>
        </div>
    )
}
