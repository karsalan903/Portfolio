import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Lets have a chat" image="/pexels-burst-373883.jpg"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact