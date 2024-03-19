import { Metadata } from 'next'
import Image from 'next/image'
import laptopTable from '@/public/images/laptop-table.jpg'
import webTools from '@/public/images/web-tools.jpg'

export const metadata: Metadata = {
  title: 'Education',
}

export default function Education() {
  return (
    <div className="education-page">
      <h1 className="text-xl font-bold mb-4 text-center underline">
        My Education
      </h1>
      <Image
        className="h-80 md:h-[28.5rem] object-cover rounded-md shadow-sm mx-auto mb-6"
        src={laptopTable}
        alt="laptop table"
        priority
      ></Image>
      <div className="mx-auto p-8 bg-white rounded-md shadow-sm">
        <div className="flex flex-col xl:flex-row xl:items-center">
          <div className="font-lg xl:w-1/2 xl:mr-12">
            <p className="mb-4">
              My journey into web development began with <b>self-study</b>. Despite
              managing other responsibilities, I dedicated myself to coding
              daily, immersing myself in manuals, articles, and official
              documentation.
            </p>
            <p className="mb-4">
              After several months of persistent learning, I secured my first
              job, marking the beginning of an enriching chapter in my career.
            </p>
            <p className="mb-4">
              As I delved deeper into the field, my knowledge flourished, and I
              evolved into a proficient developer within my domain.
              Complementing my practical experience, I furthered my education by
              enrolling in a specialized course:
            </p>
            <p className="mb-4">
              <b>
                2017 - 2018: Diploma, Technion Certified Web Developer, Tel Aviv
              </b>
            </p>
            <p className="mb-4">
              Completed a comprehensive Full Stack Development course covering
              HTML, CSS, JavaScript, TypeScript, Angular, Node.js, MongoDB,
              MySQL, Git, and Express.js, among other technologies.
            </p>
            <p className="mb-4">
              Attached is an illustration showcasing the primary technologies I
              mastered through self-study, formal education, and practical
              application.
            </p>
          </div>
          <div className="xl:w-1/2">
            <Image
              className="w-64 h-64 md:w-72 md:h-72 xl:w-80 xl:h-80 object-cover mx-auto"
              src={webTools}
              alt="web tools"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
