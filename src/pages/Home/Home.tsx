import bgHome from "../../images/bgHome.jpg"

const Home = () => {

  return (
    <section id="home"
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center gap-5"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
      <h1 className="text-white text-4xl font-semibold">Olá, eu sou o Matheus.</h1>
      <p className="text-white text-lg w-[700px] text-justify">Desenvolvedor front-end, estou determinado a criar experiências de usuário envolventes e intuitivas, contribuindo assim para um ecossistema digital mais inovador e acessível.</p>
    </section>
  );
}
export default Home;