import tw from "twin.macro";
import AnimationWrapper from "./AnimationWrapper";
import {LinkIcon} from "@heroicons/react/solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <div css={tw`min-h-screen flex flex-col items-center justify-center font-sans`}>
      <AnimationWrapper animation={`animate-fade-pop-in`}>
        <h2 tw="mb-8 lg:mb-4 inline-flex flex-row flex-wrap">
          <span tw="text-4xl lg:text-6xl font-bold text-gray-700 dark:text-gray-200 transition-colors duration-200">Contact me!</span>
          <LinkIcon tw="hidden lg:block w-5 h-5 ml-1 mt-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors dark:text-gray-200"/>
        </h2>
      </AnimationWrapper>

      <div tw="flex flex-col gap-2 lg:flex-row lg:gap-8">
        <div tw="flex flex-row items-center justify-center text-gray-700 dark:text-gray-200 transition-colors duration-200">
          <FontAwesomeIcon icon={faEnvelope} tw="mt-1"/>
          <span tw="text-lg select-all font-normal ml-1">alexanderjeamoro@gmail.com</span>
        </div>
        <a href="https://www.linkedin.com/in/alexander-jeam-oro/" rel="noreferrer" target="_blank"
           tw="flex flex-row items-center justify-center text-gray-700 cursor-pointer dark:text-gray-200 transition-colors duration-200"
           className="group">
          <FontAwesomeIcon icon={faLinkedin} tw="mt-1"/>
          <span tw="text-lg font-normal ml-1">@alexander-jeam-oro</span>
          <FontAwesomeIcon icon={faExternalLinkAlt}
                           tw="w-2 h-2 transition-opacity duration-75 opacity-0 group-hover:opacity-100 dark:text-red-500"/>
        </a>
      </div>
    </div>
  )
}

export default ContactMe;
