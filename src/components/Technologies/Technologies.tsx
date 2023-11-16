import Technology from "../Technology/Technology";

import HtmlSvg from "../../images/html.svg";
import CssSvg from "../../images/css.svg";
import JavascriptSvg from "../../images/javascript.svg";
import TypescriptSvg from "../../images/typescript.svg";
import ReactSvg from "../../images/react.svg";
import NextSvg from "../../images/next.svg";
import TailwindSvg from "../../images/tailwindcss.svg";
import CSharpSvg from "../../images/c_sharp.svg";
import GitSvg from "../../images/git.svg"
import GitHubSvg from "../../images/github.svg"

const Technologies = () => {
  return (
    <div className="flex flex-col items-center w-8/12 text-center">
      <div className="w-10/12 p-10 border-t">
        <span className="text-xl">TECNOLOGIAS</span>
      </div>
      <div className="grid grid-cols-5 gap-4 items-center w-full">
        <Technology svg={HtmlSvg} name="HTML5" />
        <Technology svg={CssSvg} name="CSS3" />
        <Technology svg={JavascriptSvg} name="JavaScript" />
        <Technology svg={TypescriptSvg} name="TypeScript" />
        <Technology svg={ReactSvg} name="React" />
        <Technology svg={NextSvg} name="Next.js" />
        <Technology svg={TailwindSvg} name="Tailwind CSS" />
        <Technology svg={GitSvg} name="Git" />
        <Technology svg={GitHubSvg} name="GitHub" />
        <Technology svg={CSharpSvg} name="C Sharp" />
      </div>
    </div>
  );
};

export default Technologies;