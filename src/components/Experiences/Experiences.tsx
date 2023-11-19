import Experience from "../Experience/Experience";

const Experiences = () => {
  return (
    <div className="flex flex-col gap-4 md:w-1/2">
      <div className="py-5">
        <span className="text-xl text-blue-400">EXPERIÊNCIAS</span>
      </div>
      <Experience
        company="TOPSAPP"
        description="
        No meu trabalho atual, atuo como desenvolvedor front-end, desempenhando um papel crucial na manutenção e desenvolvimento de páginas para a empresa em que estou inserido."
        initial="02/2023"
        office="FRONT-END"
        technologies="HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS, Laravel, Git e GitHub."
      />
    </div>
  );
};

export default Experiences;
