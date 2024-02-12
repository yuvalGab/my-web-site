import { Metadata } from "next";
import Grid, { GridItem } from "../(common)/Grid";
import htmlLogo from "../../public/images/html-logo.png";
import cssLogo from "../../public/images/css-logo.png";
import jsLogo from "../../public/images/js-logo.png";
import tsLogo from "../../public/images/ts-logo.png";
import reactLogo from "../../public/images/react-logo.png";
import angularLogo from "../../public/images/angular-logo.png";
import nodeLogo from "../../public/images/node-logo.png";
import mongoLogo from "../../public/images/mongo-logo.png";

export const metadata: Metadata = {
  title: "Skills",
};

const SKILLS_ITEMS: GridItem[] = [
  { title: "HTML", image: htmlLogo },
  { title: "CSS", image: cssLogo },
  { title: "JavaScript", image: jsLogo },
  { title: "TypeScript", image: tsLogo },
  { title: "React", image: reactLogo },
  { title: "React Native", image: reactLogo },
  { title: "Angular", image: angularLogo },
  { title: "Node.js", image: nodeLogo },
  { title: "MongoDB", image: mongoLogo },
];

export default function Skills() {
  return (
    <div className="skills-page">
      <h1 className="text-xl font-bold mb-4 text-center underline">
        My Skills
      </h1>
      <Grid items={SKILLS_ITEMS} />
    </div>
  );
}
