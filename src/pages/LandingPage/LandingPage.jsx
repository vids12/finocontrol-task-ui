import "./LandingPage.css";
import { Navbar,BannerOnImg,Banner,Instructor,Certificate,Tabs,Requirements,Outcomes,Benefits,Overview,Brochure,Content,Faqs,Sidebox } from "../../components";

export function LandingPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <div className="landing-image">
                {/* <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="f" className="landing-image" /> */}
                <BannerOnImg />
            </div>
            <Banner />
            <Tabs />
            <section className="main-section">
                <div className="primary-section">
                    <Overview />
                    <hr />
                    <Outcomes />
                    <hr/>
                    <Instructor />
                    <hr />
                    <Benefits />
                    <hr />
                    <Requirements />
                    <hr />
                    <Content />
                    <hr />
                    <div className="landing-page-brochure"><Brochure /></div>
                    <hr />
                    <Certificate />
                    <hr />
                    <Faqs />
                </div>
                <div className="secondary-section">
                    <Sidebox />
                    <Brochure />
                </div>
            </section>
        </div>
    )
}
