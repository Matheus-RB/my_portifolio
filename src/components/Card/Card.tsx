interface Props {
  name: string;
  technologies: string[];
  gitHub: string;
  site: string;
  image: string;
  characteristics: string[];
  icons: Record<string, string>;
}

const Card = ({
  gitHub,
  image,
  name,
  site,
  technologies,
  characteristics,
  icons,
}: Props) => {
  return (
      <div className="text-light bg-gray-900 border border-opacity-25 rounded-md">
        <img className="rounded-t-[4.7px]" src={image} alt={`img-${name}`} />
        <div className="card-body">
          <div className="card-title text-2xl font-bold text-center">
            {name}
          </div>
        </div>
        <div className="p-3">
          <ul className="list-disc list-inside">
            {characteristics.map((char, index) => (
              <li key={index} className="rounded-pill text-dark bg-light">
                {char}
              </li>
            ))}
          </ul>
          <div className="py-1 flex gap-4 mt-3">
            <button
              type="button"
              className="py-1 px-2 bg-gray-400 rounded-md"
              onClick={() => window.open(gitHub, "_blank")}
            >
              GitHub
            </button>
            <button
              type="button"
              className="py-1 px-2 bg-gray-400 rounded-md"
              onClick={() => window.open(site, "_blank")}
            >
              Site
            </button>
          </div>
        </div>
        <div className="rounded-b-[4.7px] bg-gray-600 grid grid-cols-4 p-2">
          {technologies.map((tech, index) => (
            <img key={index} src={icons[tech]} alt={tech} />
          ))}
        </div>
      </div>
  );
};

export default Card;
