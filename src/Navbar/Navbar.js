import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import {useNavigate} from "react-router-dom";
// useHistory is replaced by useNavigate() in react-router-dom v6
const Navbar = () => {

    const[show, handleShow] = useState(false);
    const history = useNavigate()

    const transitionNavBar=() => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return ()=> 
            window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
            onClick={() => history("/")}
            className="nav_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            // https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png
            alt="Netflix"
            />

            <img 
            onClick={()=> history("/profile")} 
            className="nav_avatar"
            src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
            alt="Avatar"
            />
        </div>
    );
}

export default Navbar
