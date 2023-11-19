interface Props {
  name: string;
  technologies: string;
  gitHub: string;
  site: string;
  image: string;
  block?: boolean;
}

const Card = ({ image, gitHub, name, site, technologies, block }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="group h-[300px] w-full lg:h-[380px] lg:w-[490px]">
        <div className="relative h-full w-full rounded-lg shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className="rounded-lg object-cover h-full w-full shadow-xl shadow-black/40"
              src={image}
              alt={`${name}Image`}
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-lg bg-black/90 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col justify-center">
              <h1 className="text-lg">Projeto: {name}</h1>
              {!block && (
                <div>
                  <p className="text-lg">Tecnologias: {technologies}</p>
                  <p className="text-lg">
                    GitHub:{" "}
                    <a target="_blank" rel="noopener noreferrer" href={gitHub}>
                      GitHub.{name}
                    </a>
                  </p>
                  <p className="text-lg">
                    Site:{" "}
                    <a href={site} target="_blank" rel="noopener noreferrer">
                      {site}
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
