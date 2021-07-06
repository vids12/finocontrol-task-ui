import "./Webinar.css";
import  { Navbar, Web } from "../../components/index";

export function Webinar(){
    return (
        <div>
            <Navbar />
            <div className="webinar">
            <h1 className="title">
                    Upcoming Webinars
                    <div className="box"></div>
                </h1>
                <section>
                    <Web />
                </section>
            </div>
        </div>
    );
}