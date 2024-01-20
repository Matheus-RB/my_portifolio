import { useState } from "react";

interface Props {
  patch: string;
  credential: string;
}

const Certificate = ({ patch, credential }: Props) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`relative inline-block w-full ${isHovered ? 'filter brightness-50' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={`src/images/${patch}`} alt="certificado" className="w-full h-auto max-w-full xl:max-h-[303px]" />

      {isHovered && (
        <div className="absolute bottom-4 right-4">
          <a href={credential} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-400 cursor-pointer font-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default Certificate;