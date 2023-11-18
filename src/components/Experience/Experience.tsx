interface Props {
  initial: number;
  final?: number;
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
      <div>
        {initial} - {final ? final : "atualmente"}
      </div>
      <div>
        {company} - {office}
      </div>
      <div>{description}</div>
      <div>{technologies}</div>
    </div>
  );
};

export default Experience;
