interface Props {
  svg: string;
  name: string;
}

const Technology = ({ name, svg }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={svg} alt={`${name}SVG`} width={100} height={100} />
      <span>{name}</span>
    </div>
  );
};

export default Technology