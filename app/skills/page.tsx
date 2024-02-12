import { Metadata } from "next";
import Grid, { GridItem } from "../(common)/Grid";
import htmlLogo from "../../public/images/html-logo.png";
import cssLogo from "../../public/images/css-logo.png";
import jsLogo from "../../public/images/js-logo.png";

export const metadata: Metadata = {
  title: "Skills",
};

const SKILLS_ITEMS: GridItem[] = [
  { title: "HTML", image: htmlLogo },
  { title: "CSS", image: cssLogo },
  { title: "JavaScript", image: jsLogo },
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
