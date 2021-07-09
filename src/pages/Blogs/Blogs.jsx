import { Navbar } from "../../components";
import "./Blogs.css";

export function Blogs() {
    return (
        <div>
            <Navbar />
            <div className="blogs">
                <h1 className="title">Blogs</h1>
                <section className="blog-section">
                    <div className="ow section">
                        <h3>Heading</h3>
                        <div className="container "><p>Blog sub-heading</p>
                            <a target="_blank" className="link" href="##">View the blog</a> </div>
                    </div>
                </section>
                <section className="blog-section">
                    <div className="section">
                        <h3>Heading</h3>
                        <div className="container "><p>Blog sub-heading</p>
                            <a target="_blank" className="link" href="##">View the blog</a> </div>
                    </div>
                </section>
            </div> 
        </div>
    )
}
