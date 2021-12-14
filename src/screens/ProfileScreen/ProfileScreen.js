import React from 'react'
import {useSelector} from "react-redux";
import {userSlice} from '../../features/userSlice';
import { auth } from '../../firebase';
import Navbar from '../../Navbar/Navbar';
import "./ProfileScreen.css";

const ProfileScreen = () => {
    return (
        <div className="profileScreen">
            <Navbar/>
            <div className="profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src = "https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                    alt="netflix_profile" />
                </div>
                <div className="profileScreen_details">
                    <h2>xyz@gmail.com</h2>
                    <div className='profileScreen_plans'>
                        <button  onClick ={()=> auth.signOut()} className='profileScreen_signOut'>Sign Out</button>                        </div>
                    </div>
                </div>
            <div/>
        </div>
    )
}

export default ProfileScreen
