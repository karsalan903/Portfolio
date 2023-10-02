import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { FlashOnRounded } from "@mui/icons-material";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        }else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
        <Link to="/">
            <div style={{position: "relative", width: "160px", height: "50px"}}>
                <img src="/braincode-header.jpg" alt="logo" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "3px"}}/>
            </div>
        </Link>
        <ul className={click ? "navbarMenu active" : "navbarMenu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburgur" onClick={handleClick}>
            {click ? (
                <CloseIcon style={{ color: "#fff" }}/>
            ) : (
                <MenuOpenIcon style={{ color: "#fff" }}/>
            )}
        </div>
    </div>
  )
}

export default Navbar