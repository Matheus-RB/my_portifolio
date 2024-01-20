import Card from "../../components/Card/Card";
import tuneImg from "/images/tune_zone.png";

const icons = {
  React: "/images/react.svg",
  Next: "/images/next.svg",
  Tailwind: "/images/tailwindcss.svg",
  GitHub: "/images/github.svg"
};

const Projects = () => {
  return (
    <section id="projects" className="text-stone-100 flex flex-col items-center ">
      <div className="w-10/12">
        <div className="text-center py-10 md:py-20">
          <h2 className="text-gray-300 text-4xl font-semibold">PROJETOS</h2>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <Card
            gitHub="https://github.com/MatheusReisBarros/TuneZone"
            name="TuneZone"
            site="https://tune-zone.vercel.app/"
            technologies={["React", "Next", "Tailwind", "GitHub"]}
            image={tuneImg}
            characteristics={['Site de música', 'Interface simples e agradável']}
            icons={icons}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
