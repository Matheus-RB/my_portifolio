import DownloadCv from "../DownloadCv/DownloadCv";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-2">
      <p>
        Me chamo Matheus, sou desenvolvedor front-end na TopSapp e atualmente estudante de Sistemas de Informação na UNEMAT.
        Meu tempo livre é dedicado ao desenvolvimento de projetos pessoais e ao aprofundamento no estudo da linguagem de programação
        C#.
      </p>
      <p>
        No ambiente profissional, atuo na criação e manutenção de diversas plataformas, tais como sites, ERPs e CRMs, desempenhando 
        um papel crucial na evolução tecnológica da empresa. Com experiência em projetos desafiadores, como a implementação de ERPs e 
        a manutenção de sites, busco incessantemente ampliar meus conhecimentos.
      </p>
      <p>
        Mantenho-me atualizado e procuro novos desafios que contribuam para meu crescimento profissional e pessoal. Estou sempre em 
        busca de oportunidades que me permitam aplicar e expandir minhas habilidades, contribuindo para o avanço da tecnologia e do 
        desenvolvimento de soluções inovadoras.
      </p>
      <p>
        Estou aberto a novas oportunidades e colaborações. Sinta-se à vontade
        para explorar meu portfólio e entrar em contato para discutir como posso
        agregar valor ao seu projeto ou equipe.
      </p>
      <DownloadCv />
    </div>
  );
};

export default AboutMe;
