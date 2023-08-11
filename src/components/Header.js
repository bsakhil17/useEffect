import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";

const Header = ()=>{
 const [btnNameReact,setbtnNameReact]=useState("Login")

    return  (
        <div className="header">
        <div className="logo-header">
           <img className="logo" src={CDN_LOGO}></img>
        </div>
        <div className="nav-items">
            <ul className="">
                <li>Home</li>
                <li>About us</li>
                <li>contact us</li>
                <li>cart</li>
                <button className="login" onClick={()=>{
                  btnNameReact==="Login"? 
                  setbtnNameReact("Logout")
                  :setbtnNameReact("Login")
                }}>{btnNameReact}</button>
            </ul>
        </div>
        </div>
    )
} 

export default Header;