import "../components/HeroImg2Styles.css";

function HeroImg2(props) {
  return (
    <div className="heroImg2">
        <div className="mask2">
            <img  className="introImg2" src={props.image} alt="introImg2"/>
        </div>
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroImg2