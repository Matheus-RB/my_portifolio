import Card from "../../components/Card/Card";
import tuneImg from "../../images/tune_zone.png";
import breve from "../../images/breve.jpg";

const Projects = () => {
  return (
    <section id="projects" className="text-stone-100 flex flex-col items-center ">
      <div className="w-10/12">
        <div className="text-center py-10 md:py-20">
          <h2 className="text-gray-300 text-4xl font-semibold">PROJETOS</h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:p-10">
          <Card
            gitHub="https://github.com/MatheusReisBarros/TuneZone"
            name="TuneZone"
            site="https://tune-zone.vercel.app/"
            technologies="React.js, Next.jsx e Tailwindcss."
            image={tuneImg}
          />
          <Card
            gitHub="#"
            image={breve}
            name="Em breve"
            site="#"
            technologies="none"
            block={true}
          />
          <Card
            gitHub="#"
            image={breve}
            name="Em breve"
            site="#"
            technologies="none"
            block={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
