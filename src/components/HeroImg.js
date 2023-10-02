import { Link } from "react-router-dom"
import "../components/HeroImgStyles.css"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
          <img className="introImg" src="/ales-nesetril-Im7lZjxeLhg-unsplash.jpg" alt="introImg"/>
      </div>
      <div className="content">
          <p>HI, I'M A WEB DEVELOPER.</p>
          <h1>React Developer.</h1>
          <div>
            <Link to="/project" className="button">
              PROJECTS
            </Link>
            <Link to="/contact" className="buttonLight">
              CONTACT
            </Link>
          </div>
      </div>
    </div>
  )
}

export default HeroImg