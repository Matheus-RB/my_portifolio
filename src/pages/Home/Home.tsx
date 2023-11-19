import bgHome from "../../images/bgHome.jpg"

const Home = () => {

  return (
    <section id="home"
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center gap-5"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      <h1 className="text-white text-4xl font-semibold px-10 md:px-0">Olá, eu sou o <span className="text-gray-300">Matheus</span>.</h1>
      <p className="text-white text-lg md:w-[700px] text-justify px-10 md:px-0">Desenvolvedor front-end, estou determinado a criar experiências de usuário envolventes e intuitivas, contribuindo assim para um ecossistema digital mais inovador e acessível.</p>
    </section>
  );
}
export default Home;