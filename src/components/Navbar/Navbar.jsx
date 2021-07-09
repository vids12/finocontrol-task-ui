import { NavLink } from "react-router-dom";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Dropbox } from "..";
import "./Navbar.css";
import { changeDocTitle } from "../../utils/changeDocTitle";

export function Navbar() {
    const [showDropbox, setShowDropbox] = useState(false);
    const [showAngle, setAngle] = useState(false);
    const [toggle, setToggle] = useState(false);

    function angleHandler(){
        setShowDropbox(!showDropbox);
        setAngle(!showAngle);
    }
    function handleClick(data){
      changeDocTitle(data);
      setToggle(!toggle);
    }

    return (
        <nav className="navbar">
            <img src="https://lh3.googleusercontent.com/aVB6ucz5_TIreSi6eghwfnVd6UXTl0ZkAAjLiw0djXeZpqkAZ0wy_R0Ub4wS5pOzZQc-lVHuU9ruyHVOwX5rbNpUT7SJYvKrKcNk6wrD_YtPvDbkk4ZbQ-t3olFx0ej5drRYH1fJ" alt="logo" className="logo" onClick={()=>scroll.scrollToTop()} />

          <ul className={toggle ? "nav active" : "nav"}>
            <li className="nav-item">
              <NavLink
                end
                to="/"
                activeClassName="selected"
                className="nav-links"
                onClick={()=>handleClick("Home")}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/courses"
                activeClassName="selected"
                className="nav-links"
                onClick={()=>handleClick("Courses")}
              >
                COURSES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/webinars"
                activeClassName="selected"
                className="nav-links"
                onClick={()=>handleClick("Webinars")}
              >
                WEBINARS
              </NavLink>
            </li>
            <li className="nav-item nav-links">
                COMPANY
                <i className={showAngle ? "fa fa-angle-up" : "fa fa-angle-down"} aria-hidden="true" onClick={() => angleHandler()}></i>
            </li>
            {showDropbox && <Dropbox />}
            <li className="nav-item">
              <NavLink
                to="/blogs"
                activeClassName="selected"
                className="nav-links"
                onClick={()=>handleClick("Blogs")}
              >
                BLOGS
              </NavLink>
            </li>
            <li className="nav-item">
                <button className="login-register-btn">LOGIN / REGISTER</button>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
      </nav>
    );
}