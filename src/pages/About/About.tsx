import AboutMe from "../../components/AboutMe/AboutMe"
import Contacts from "../../components/Contacts/Contacts"
import Experiences from "../../components/Experiences/Experiences"
import Technologies from "../../components/Technologies/Technologies"

const About = () => {
  return (
    <section id="about" className="text-white flex flex-col gap-10 items-center">
      <div className="text-center p-10">
        <h2 className="text-4xl font-semibold">SOBRE</h2>
      </div>
      <AboutMe />
      <Contacts />
      <Experiences />
      <Technologies />
    </section>
  )
}

export default About