import "./NavBar.css";
import { Link } from "react-router-dom";
import React from 'react';


const NavBar = () => {

    return (
        <div className="navbar">
            <button className="button">
                <Link className="link" to="/">Home</Link>
            </button>
            <button className="button">
                <Link className="link" to="/aboutus">AboutUs</Link>
            </button>
            <button className="button">
                <Link className="link" to="/contactus">ContactUs</Link>
            </button>
            <button className="button">
                <Link className="link" to="/addservice">Add Service</Link>
            </button>
        </div>
    )
}
export default NavBar;

