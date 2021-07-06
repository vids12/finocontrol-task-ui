import "./Courses.css";
import { Course1,Course2,Course3, Navbar } from "../../components";


export function Courses(){
    return (
        <div>
            <Navbar />
            <div className="courses">
                <h1 className="course-heading">
                    Related Courses
                    <div className="box"></div>
                </h1>
                <section className="courses-list">
                    <Course1 />
                    <Course2 />
                    <Course3 />
                </section>
            </div>
        </div>
    );
}