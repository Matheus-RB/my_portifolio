import Training from "../Training/Training";

const Trainings = () => {
  return (
    <div className="flex flex-col gap-4 md:w-1/2">
      <div className="py-5">
        <span className="text-xl text-blue-400">FORMAÇÕES</span>
      </div>
      <Training
        institution="UNEMAT"
        course="SISTEMA DE INFORMAÇÃO"
        description="A Faculdade de Sistemas de Informação capacita estudantes para projetar, desenvolver e gerenciar sistemas de informação, proporcionando uma sólida formação em programação, análise de dados e administração de tecnologias de informação."
        initial="1/2022"
      />
    </div>
  );
};

export default Trainings;
