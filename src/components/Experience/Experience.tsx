interface Props {
  initial: string;
  final?: string;
  office: string;
  company: string;
  description: string;
  technologies: string;
}

const Experience = ({
  company,
  description,
  final,
  initial,
  office,
  technologies,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>{" "}
        {initial} - {final ? final : "ATUAL"}
      </div>
      <div className="font-medium">
        {office} - {company}
      </div>
      <div>
        <span className="font-bold">DESCRIÇÃO:</span>
        {description}
      </div>
      <div>
        <span className="font-bold">TECNOLOGIAS:</span> {technologies}
      </div>
    </div>
  );
};

export default Experience;
