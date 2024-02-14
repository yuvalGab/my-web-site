import { Metadata } from "next";
import Image from "next/image";
import Carousel, { CarouselItem } from "../(common)/Carousel";
import supplantLogo from "../../public/images/supplant-logo.jpg";
import korentecLogo from "../../public/images/korentec-logo.png";
import welldoneSoftwareLogo from "../../public/images/welldone-software-logo.jpg";
import dgbLogo from "../../public/images/dgb-logo.png";
import openSpace from "../../public/images/open-space.jpg"

export const metadata: Metadata = {
  title: "Experience",
};

const EXPERIENCE_ITEMS: CarouselItem[] = [
  {
    title: "2021 - 2024: SupPlant - Full Stack Team Leader",
    description: `I started as a Full Stack Developer and after a year I became the team leader.
    Leading a development team while performing task planning, code review, deployments and front end tech lead.
    Works on from scratch and writes quality code from end to end, while adapting to rapid changes in the company.
    For example, I led a rapid development of a new product from end to end, using Node.js, MongoDB and React.
    Making sure to stay up to date with new technologies and best practices, while examining cost versus benefit.
    Synchronizing the work with the other teams, the product and the other professional elements in the organization.
    Individual and group management of international team members, while maintaining balanced work and taking care of their personal and professional needs.`,
    image: supplantLogo,
  },
  {
    title: "2018 - 2021: Korentec Technologies - Full Stack Developer",
    description: `Development of web systems for security and civilian companies.
    Working with companies like Refael, IAI, 888 Holdings, etc.
    Integration in external development teams in Israel and abroad.
    Perform tasks on both server side and client side according to the precise design of the apps.
    Responsibility for Front End innovation processes in the development department.
    Mentoring and guidance for junior developers in the company.
    For the last year I have joined an international development team of a large company.
    We developed standalone widgets with them, for their world wide web products.
    My role was primarily to lead the technical React FE development of the new apps.`,
    image: korentecLogo,
  },
  {
    title: "2017 - 2018: Welldone Software - Full Stack Developer (remote job)",
    description: `Development, maintenance and debugging of customer apps.
    Writing code with emphasis on correct writing, quality checking and testing.
    `,
    image: welldoneSoftwareLogo,
  },
  {
    title: "2017: DGB - Full Stack Developer (temporary position)",
    description: `Development for a startup product, an app for preventing sexual harassment at work.
    Creating components by using the right lifecycle and global state management.
    Interacting with the server side as needed by writing apis functions.`,
    image: dgbLogo,
  },
];

export default function Experience() {
  return (
    <div className="experience-page">
      <h1 className="text-xl font-bold mb-4 text-center underline">
        My Experience
      </h1>
      <Carousel data={EXPERIENCE_ITEMS} />
      <Image
        className="h-80 md:h-[28.5rem] object-cover rounded-md shadow-sm w-11/12 md:w-10/12 mx-auto mt-6"
        src={openSpace}
        alt="open space"
        quality={50}
        priority
      ></Image>
    </div>
  );
}
