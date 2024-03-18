import { Metadata } from 'next'
import Image from 'next/image'
import Carousel, { CarouselItem } from '../(common)/Carousel'
import supplantLogo from '@/public/images/supplant-logo.jpg'
import korentecLogo from '@/public/images/korentec-logo.png'
import welldoneSoftwareLogo from '@/public/images/welldone-software-logo.jpg'
import dgbLogo from '@/public/images/dgb-logo.png'
import openSpace from '@/public/images/open-space.jpg'

export const metadata: Metadata = {
  title: 'Experience',
}

const EXPERIENCE_ITEMS: CarouselItem[] = [
  {
    title: '2021 - 2024: SupPlant - Full Stack Team Leader',
    description: `Initially employed as a Full Stack Developer, advanced to the role of team leader within a year.
    Led a development team, recruiting developers, overseeing task planning, code reviews, deployments, and serving as the front-end tech lead.
    Executed projects from inception to completion, utilizing technologies such as Node.js, MongoDB, and React.
    Adaptable to fast-paced changes within the company, while maintaining a focus on writing high-quality code.
    Kept abreast of emerging technologies and best practices, ensuring alignment with organizational goals.
    Coordinated efforts with cross-functional teams and stakeholders, both locally and internationally, fostering a collaborative work environment.`,
    image: supplantLogo,
  },
  {
    title: '2018 - 2021: Korentec Technologies - Full Stack Developer',
    description: `Contributed to the development of web systems for security and civilian companies, including notable clients such as Refael, IAI, and 888 Holdings.
    Collaborated with internal and external development teams, both domestic and international, to deliver projects adhering to strict specifications.
    Took charge of front-end innovation processes within the development department and provided mentorship to junior developers.
    Joined an international development team in the final year, specializing in React front-end development for new applications.`,
    image: korentecLogo,
  },
  {
    title: '2017 - 2018: Welldone Software - Full Stack Developer (remote job)',
    description: `Engaged in the development, maintenance, and debugging of customer applications, emphasizing code quality, testing, and adherence to best practices.`,
    image: welldoneSoftwareLogo,
  },
  {
    title: '2017: DGB - Full Stack Developer (temporary position)',
    description: `Contributed to the development of a startup product aimed at preventing sexual harassment in the workplace.
    Developed components with a focus on efficient lifecycle management and global state handling, while also interfacing with server-side APIs as necessary.`,
    image: dgbLogo,
  },
]

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
  )
}
