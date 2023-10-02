import { NavLink } from "react-router-dom";
import "../components/WorkCardStyles.css";


function WorkCardProps(props) {
  return (
            <div className="projectCard">
                <img src={props.imgsrc} alt="projectCardImg"/>
                <h2 className="projectTitle">{props.title}</h2>
                <div className="projectDetails">
                  <p>
                    {props.text}
                    <br/>
                    <br/>
                    {props.text2}
                    <br/>
                    <br/>
                    {props.text3}
                  </p>
                  <div className="projectButtons">
                    <NavLink to={props.view} className="button">VIEW</NavLink>
                    <NavLink to={props.source} className="button">SOURCE</NavLink>
                  </div>
                </div>
            </div>
  )
}

export default WorkCardProps