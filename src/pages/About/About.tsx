import AboutMe from "../../components/AboutMe/AboutMe";
import Contacts from "../../components/Contacts/Contacts";
import Experiences from "../../components/Experiences/Experiences";
import Technologies from "../../components/Technologies/Technologies";
import Trainings from "../../components/Trainings/Trainings";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center text-gray-300 mb-10"
    >
      <div className="flex flex-col gap-10 items-center w-10/12">
        <div className="text-center pt-10 md:pt-0 md:p-10">
          <h2 className="text-4xl font-semibold">SOBRE</h2>
        </div>
        <AboutMe />
        <Contacts />
        <div className="md:flex justify-between gap-4">
          <Experiences />
          <Trainings />
        </div>
        <Technologies />
      </div>
    </section>
  );
};

export default About;
