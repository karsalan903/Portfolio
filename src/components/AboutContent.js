import { Link } from "react-router-dom"
import "../components/AboutContentStyles.css"

const AboutContent = () => {
  return (
    <div className="About">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm currently a Full stack Developer seeking many ways to improve my skills through problem-solving and creating various projects!</p>
            <Link to="/contact">
                <button className="button">CONTACT</button>
            </Link>
        </div>
        <div className="right">
           <div className="imageContainer">
                <div className="imageStack Top">
                    <img src="/opt_lbp_react_thumbnail.jpg" className="img" alt="Image"/>
                </div>
                <div className="imageStack Bottom">
                    <img src="/opt_mkp_nextjs_thumbnail.jpg" className="img" alt="Image"/>
                </div>
           </div> 
        </div>
    </div>
  )
}

export default AboutContent