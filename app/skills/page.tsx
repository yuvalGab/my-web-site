import Grid, { GridItem } from "../(common)/Grid";
import { Metadata } from "next";
import htmlLogo from "@/public/images/html-logo.png";
import cssLogo from "@/public/images/css-logo.png";
import jsLogo from "@/public/images/js-logo.png";
import tsLogo from "@/public/images/ts-logo.png";
import reactLogo from "@/public/images/react-logo.png";
import angularLogo from "@/public/images/angular-logo.png";
import nodeLogo from "@/public/images/node-logo.png";
import mongoLogo from "@/public/images/mongo-logo.png";
import mysqlLogo from "@/public/images/mysql-logo.png";
import dockerLogo from "@/public/images/docker-logo.png";
import gitLogo from "@/public/images/git-logo.png";
import expressLogo from "@/public/images/express-logo.png";
import electronLogo from "@/public/images/electron-logo.png";
import jqueryLogo from "@/public/images/jquery-logo.png";
import reduxLogo from "@/public/images/redux-logo.png";
import mobxLogo from "@/public/images/mobx-logo.png";
import graphqlLogo from "@/public/images/graphql-logo.png";
import pwaLogo from "@/public/images/pwa-logo.png";
import leafletLogo from "@/public/images/leaflet-logo.png";
import googleAnalyticsLogo from "@/public/images/google-analytics-logo.png";
import mixpanelLogo from "@/public/images/mixpanel-logo.jpg";
import vscLogo from "@/public/images/vsc-logo.png";
import githubLogo from "@/public/images/github-logo.png";

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
  { title: "MySQL", image: mysqlLogo },
  { title: "Docker", image: dockerLogo },
  { title: "Git", image: gitLogo },
  { title: "Express.js", image: expressLogo },
  { title: "Electron", image: electronLogo },
  { title: "jQuery", image: jqueryLogo },
  { title: "Redux", image: reduxLogo },
  { title: "MobX", image: mobxLogo },
  { title: "GraphQL", image: graphqlLogo },
  { title: "PWA", image: pwaLogo },
  { title: "Leaflet", image: leafletLogo },
  { title: "Google Analytics", image: googleAnalyticsLogo },
  { title: "Mixpanel", image: mixpanelLogo },
  { title: "VSC", image: vscLogo },
  { title: "GitHub", image: githubLogo },
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
