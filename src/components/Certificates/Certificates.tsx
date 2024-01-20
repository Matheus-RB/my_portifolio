import Certificate from '../Certificate/Certificate';

const Certificates = () => {
  return (
    <section id="certificates" className="text-stone-100 flex flex-col items-center">
      <div className="text-center py-10 md:py-20">
        <h2 className="text-gray-300 text-4xl font-semibold">CERTIFICADOS</h2>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Certificate patch="html.jpg" credential="https://cursos.onebitcode.com/cert/k625FYgAjehn5wh" />
        <Certificate patch="css.jpg" credential="https://cursos.onebitcode.com/cert/boOWFxlKb4Cp5Xu" />
        <Certificate patch='css_moderno.jpg' credential='https://cursos.onebitcode.com/cert/7RZqhYApD3hZ3kT' />
        <Certificate patch='javascript.jpg' credential='https://cursos.onebitcode.com/cert/99ydIGEpK4swb2T' />
        <Certificate patch="tailwind.jpg" credential="https://www.udemy.com/certificate/UC-68ea6450-1325-4811-89da-c7f928de8528/" />
        <Certificate patch="Git_GitHub.jpg" credential="https://www.udemy.com/certificate/UC-26e17edb-1e41-4416-a4f0-b5251031f04d/" />
      </div>
    </section>
  );
};

export default Certificates;