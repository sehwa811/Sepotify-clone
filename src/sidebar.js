import styles from './sidebar.css'
import React from 'react'
import { BsSpotify } from "react-icons/bs"
import { MdHomeFilled } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import { MdPlaylistPlay } from "react-icons/md"
import { BsPlusSquareFill } from "react-icons/bs"
import { FiHeart } from "react-icons/fi"
import { MdExplore } from "react-icons/md"
import { RiGlobalLine } from "react-icons/ri"

    
function Sidebar() {
    return( 
    <nav>
        <div id="logo">
            <span><BsSpotify />Sepotify</span>
        </div>
        <div>
            <ul id="menu">
                <li><a href="#"><MdHomeFilled />Home</a></li>
                <li><a href="#"><FiSearch />Search</a></li>
                <li><a href="#"><MdPlaylistPlay />Your Playlists</a></li>
                <li><a href="#"><BsPlusSquareFill />Create Playlist</a></li>
                <br></br>
                <li><a href="#"><FiHeart />Liked Songs</a></li>
                <li><a href="#"><MdExplore />Explore</a></li>
            </ul>
        </div>
        <div id="footer">
            <a href="#">Legal</a>
            <a href="#">Privacy Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a><br></br>
            <button href="#"><RiGlobalLine />English</button>
        </div>
    </nav>)
}

export default Sidebar;