import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Dropbox } from "..";
import "./Navbar.css";

export function Navbar() {
    const [showDropbox, setShowDropbox] = useState(false);
    const [showAngle, setAngle] = useState(false);

    function angleHandler(){
        setShowDropbox(!showDropbox);
        setAngle(!showAngle);
    }

    return (
        <nav className="navbar">
            <a href="https://www.finocontrol.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://lh3.googleusercontent.com/aVB6ucz5_TIreSi6eghwfnVd6UXTl0ZkAAjLiw0djXeZpqkAZ0wy_R0Ub4wS5pOzZQc-lVHuU9ruyHVOwX5rbNpUT7SJYvKrKcNk6wrD_YtPvDbkk4ZbQ-t3olFx0ej5drRYH1fJ" alt="logo" className="logo" />
            </a>
            <div className="nav">
                <NavLink activeClassName="selected" activeStyle={{fontWeight: "800", color: "#059669"}} end to="/">HOME</NavLink>
                <NavLink activeClassName="selected" activeStyle={{fontWeight: "800", color: "#059669"}} to="/courses">COURSES</NavLink>
                <NavLink activeClassName="selected" activeStyle={{fontWeight: "800", color: "#059669"}} to="/webinars">WEBINARS</NavLink >
                <p>COMPANY<span>{showAngle ? <i className="fa fa-angle-up" aria-hidden="true" onClick={() => angleHandler()}></i> : <i className="fa fa-angle-down" aria-hidden="true" onClick={() => angleHandler()}></i> }</span></p>
                <NavLink activeClassName="selected" activeStyle={{fontWeight: "800", color: "#059669"}} to="/blogs">BLOGS</NavLink>
                <button className="login-register-btn">LOGIN / REGISTER</button>
                {showDropbox && <Dropbox />}
            </div>
        </nav>
    );
}