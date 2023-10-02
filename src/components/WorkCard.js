import "../components/WorkCardStyles.css";
import WorkCardProps from "./WorkCardProps";
import WorkCardData from "./WorkCardData";


function WorkCard() {
  return (
    <div className="workContainer">
        <h1 className="projectHeading">Projects</h1>
        <div className="projectContainer">
          {WorkCardData.map((value, index) => {
            return (
              <WorkCardProps
              key={index}
              imgsrc={value.imgsrc}
              title={value.title}
              text={value.text}
              text2={value.text2}
              text3={value.text3}
              view={value.view}
              source={value.source}/>
            )
          })}
        </div>
    </div>
  )
}

export default WorkCard