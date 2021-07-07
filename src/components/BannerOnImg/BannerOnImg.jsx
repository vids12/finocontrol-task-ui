import "./BannerOnImg.css";
import { Badge } from "../Badge/Badge";

export function BannerOnImg() {
    return (
        <div className="banner-on-img">
            <Badge text="Flagship" />
            <h3>Finocontrol Analyst Program 2021</h3>
            <p>Comprehensive Program to build a strong foundation for a Finance Career</p>
            <strong>Last Date for Registration - 12th Jan 2021</strong>
        </div>
    );
}