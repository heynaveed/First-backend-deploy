import { Image } from "@chakra-ui/react";
import {NavLink } from "react-router-dom";


export default function Navbar(){
    const baseStyle = {
        color: "white",
        textDecoration: "none"
      };
    
      const activeStyle = {
        color: "rgb(69, 146, 248)",
        textDecoration: "none"
      };
    return (
        <div className="header">
            <div className="header1">
            <Image className="logo" src="https://www.gymwolf.com/images/blog_logo.png"/>
            </div>
            <div className="header2">
            <NavLink  style={({ isActive }) => (isActive ? activeStyle : baseStyle)}  to={"/"}>Progress</NavLink>
            <NavLink  style={({ isActive }) => (isActive ? activeStyle : baseStyle)}  to={"/exercises"}>Exercises and plans</NavLink>
            <NavLink  style={({ isActive }) => (isActive ? activeStyle : baseStyle)}  to={"/mytrainer"}>My personal trianer</NavLink>
            </div>
        </div>
    )
}