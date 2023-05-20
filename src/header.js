import styles from "./header.css"
import { MdNavigateNext } from "react-icons/md"
import { MdNavigateBefore } from "react-icons/md"
import { GrNext } from "react-icons/gr"

const onSubmit = (e) => (e.preventDefault())

function Header() {
    return (
    <div id="header">
        <div id="nextPrev">
            <a href="#"><MdNavigateBefore /></a>
            <a href="#"><MdNavigateNext /></a>
        </div>
        <form id="signAndLog" onSubmit={onSubmit}>
            <button href="#">Sign up</button>
            <button href="#">Log in</button>
        </form>
    </div>
    )
}


export default Header;