import "./LandingPage.css";
import { Navbar,BannerOnImg,Banner,Instructor,Certificate,Tabs,Requirements,Outcomes,Benefits,Overview,Brochure,Content,Faqs,Sidebox } from "../../components";

export function LandingPage() {
    return (
        <div className="landing-page">
            <Navbar />
            <div className="landing-image">
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
