import { Metadata } from "next";
import Image from "next/image";
import webTools from "../../public/images/web-tools.jpg";

export const metadata: Metadata = {
  title: "Education",
};

export default function Education() {
  return (
    <div className="education-page">
      <h1 className="text-xl font-bold mb-4 text-center underline">
        My Education
      </h1>
      <div className="mx-auto p-8 bg-white rounded-md shadow-sm">
        <div className="flex flex-col xl:flex-row xl:items-center">
          <div className="font-lg xl:w-1/2 xl:mr-12">
            <p className="mb-4">
              I started my way in web development by <b>self-study</b>.
            </p>
            <p className="mb-4">
              I sat and learned to code every day even though I was working
              other jobs.
            </p>
            <p className="mb-4">
              I learned through manuals, articles, and official documentation.
            </p>
            <p className="mb-4">
              After a few months I found my first job and from there everything
              is history.
            </p>
            <p className="mb-4">
              I deepened my knowledge and over time I became a professional
              developer in his field.
            </p>
            <p className="mb-4">
              While working, I took a course in the field to sort out what I
              learned on my own:
            </p>
            <p className="mb-4">
              <b>
                2017 - 2018: Diploma, Technion Certified Web Developer, Tel Aviv
              </b>
            </p>
            <p className="mb-4">
              Course for Full Stack Development - HTML, CSS, JavaScript,
              TypeScript, Angular, Node.js, MongoDB, MySQL, Git ,Express.js,
              jQuery
            </p>
            <p className="mb-4">
              Attached here is a picture showing the main technologies that I
              learned on my own, in the course and while working.
            </p>
          </div>
          <div className="xl:w-1/2">
            <Image
              className="w-64 h-64 md:w-72 md:h-72 xl:w-80 xl:h-80 object-cover mx-auto"
              src={webTools}
              alt="web tools"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
