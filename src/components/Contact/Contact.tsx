interface Props {
  icon: string;
  link: string;
  text: string;
}

const Contact = ({ icon, link, text }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <img src={icon} height={20} width={20} alt="Icon" />
      {link ? (
        <a
          href={`https://${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default Contact;
