import styles from './library.css';
import { useState } from 'react';
import { AiOutlineInstagram } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import { MdOutlineFacebook } from "react-icons/md"
import { BsFillPlayCircleFill } from "react-icons/bs"

function MusicBox() {
    const [title, setTitle] = useState("Coffee shop")
    const [artist, setArtist] = useState("Red hot chili peppers")

    return (
    <div id="musicBox">
        <div id="overlay">
            <img src="https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg"></img>
            <BsFillPlayCircleFill id="playicon" href="#"/>
        </div>
        <span id="title">{title}</span>
        <span id="artist">{artist}</span>
    </div>
    );
}

function Company() {
    return (
        <div id="company">
            <div id="com_first">
                <p>Company</p>
                <a href="#">About</a>
                <a href="#">Jobs</a>
                <a href="#">For the Record</a>
            </div>
            <div id="com_second">
                <p>Communities</p>
                <a href="#">For Artists</a>
                <a href="#">Developers</a>
                <a href="#">Investors</a>
                <a href="#">Vendors</a>
                <a href="#">Spotify for Work</a>
            </div>
            <div id="com_third">
                <p>Useful Links</p>
                <a href="#">Support</a>
            </div>
            <div id="icons">
                <AiOutlineInstagram />
                <AiOutlineTwitter />
                <MdOutlineFacebook />
            </div>
        </div>
    )
}


function Library() {
    return (
    <div id="library">

        <div id="recent">
            <label href="#">Recent</label>
            <p>Show all</p>
            <div id="recent-box">
                <MusicBox />
                <MusicBox />
                <MusicBox />
                <MusicBox />
                <MusicBox />
            </div>
        </div>

        <div id="playlists">
            <label href="#">Spotify Playlists</label>
            <p>Show all</p>
            <div id="playlists-box">
                <MusicBox />
                <MusicBox />
                <MusicBox />
                <MusicBox />
                <MusicBox />
            </div>
        </div>

        <Company />

        <div id="license">
        </div>
    </div>);
}

export default Library;