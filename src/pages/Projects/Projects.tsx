import Card from "../../components/Card/Card"
import tuneImg from "../../images/tune_zone.png"
import breve from "../../images/breve.jpg"

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen text-stone-100"
    >
      <div className="text-center p-20">
        <h2 className="text-white text-4xl font-semibold">PROJETOS</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 p-10">
        <Card 
          gitHub="https://github.com/MatheusReisBarros/TuneZone"
          name="TuneZone" site="https://tune-zone.vercel.app/" 
          technologies="React.js, Next.jsx e Tailwindcss."
          image={tuneImg}
        />
        <img className="h-[380px] w-[490px] rounded-lg" src={breve} alt="em_breve" />
        <img className="h-[380px] w-[490px] rounded-lg" src={breve} alt="em_breve" />
      </div>
    </section>
  )
}

export default Projects