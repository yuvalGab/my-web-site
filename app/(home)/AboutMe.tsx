import Image from "next/image";
import profilePic from "../../public/images/profile-pic.png";

export default function AboutMe() {
  return (
    <div className="mx-auto p-8 bg-white rounded-md shadow-sm">
      <h2 className="text-3xl font-bold">Yuval Gabian</h2>
      <h3 className="text-2xl mb-4">web developer</h3>
      <div className="flex flex-col md:flex-row items-center">
        <div className="font-lg md:w-1/2">
          <p className="mb-4">
            <b>Full Stack Javascript Team Leader</b> with 7 years experience (2
            years as team leader).
          </p>
          <p className="mb-4">
            A hands-on team leader with good self-learning ability and great
            motivation to learn and develop.
          </p>
          <p>I live in Ramat Yishai, Israel.</p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image
            className="w-52 h-52 rounded-full object-cover mx-auto"
            src={profilePic}
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
}
