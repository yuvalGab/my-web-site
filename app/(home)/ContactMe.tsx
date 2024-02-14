import Image from "next/image";
import waLogo from "../../public/images/wa-logo.png";
import emailLogo from "../../public/images/email-logo.png";
import linkedinLogo from "../../public/images/linkedIn-logo.png";
import githubLogo from "../../public/images/github-logo.png";

const MY_PHONE_NUMBER = "+972547390829";
const MY_EMAIL_ADDRESS = "yuvalgab2007@gmail.com";
const MY_LINKEDIN_PROFILE = "yuval-gabian-37bbb1148";
const MY_GITHUB_PROFILE = "yuvalGab";

export default function ContactMe() {
  return (
    <div className="mx-auto p-8 bg-white rounded-md shadow-sm mt-6">
      <h2 className="text-2xl mb-4">Contact Me</h2>
      <div className="flex justify-center items-center space-x-4 md:space-x-16 mb-8">
        <a
          href={`https://wa.me/${MY_PHONE_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-12 h-12 cursor-pointer"
            src={waLogo}
            alt="WhatsApp"
          />
        </a>
        <a
          href={`mailto:${MY_EMAIL_ADDRESS}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-12 h-12 cursor-pointer"
            src={emailLogo}
            alt="Email"
          />
        </a>
        <a
          href={`https://linkedin.com/in/${MY_LINKEDIN_PROFILE}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-12 h-12 cursor-pointer"
            src={linkedinLogo}
            alt="LinkedIn"
          />
        </a>
        <a
          href={`https://github.com/${MY_GITHUB_PROFILE}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-12 h-12 cursor-pointer"
            src={githubLogo}
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}
