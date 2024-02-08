import { Metadata } from "next";
import Carousel, { CarouselItem } from "../(common)/Carousel";
import supplantLogo from '../../public/images/supplant-logo.png'

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
    title: "Card 2",
    description: "Description 2",
    // image: "/images/image2.jpg",
  },
  {
    title: "Card 3",
    description: "Description 3",
    // image: "/images/image3.jpg",
  },
  {
    title: "Card 4",
    description: "Description 4",
    // image: "/images/image4.jpg",
  },
];

export default function Experience() {
  return (
    <div className="experience-page">
      <h1 className="text-xl font-bold mb-4 text-center underline">
        My Experience
      </h1>
      <Carousel data={EXPERIENCE_ITEMS} />
    </div>
  );
}
