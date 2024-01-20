import email from "../../images/email.png";
import linkedinSvg from "../../images/linkedin.svg";
import Contact from "../Contact/Contact";
import gitHubSvg from "../../images/github.svg";
import whatsSvg from "../../images/whats.svg";

const Contacts = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="py-5">
        <span className="text-xl text-blue-400">CONTATOS</span>
      </div>
      <Contact
        icon={email}
        link="matheusreis123423@gmail.com"
        text="matheusreis123423@gmail.com"
      />
      <Contact
        icon={linkedinSvg}
        link="www.linkedin.com/in/matheus-reis-a6067a252"
        text="www.linkedin.com/in/matheus-reis-a6067a252"
      />
      <Contact
        icon={gitHubSvg}
        link="github.com/Matheus-RB"
        text="github.com/Matheus-RB"
      />
      <Contact
        icon={whatsSvg}
        link="api.whatsapp.com/send?phone=5565998041368"
        text="(65) 9 9804-1368"
      />
    </div>
  );
};

export default Contacts;
