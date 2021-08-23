import DefaultLayout from "../Layouts/DefaultLayout";
import SectionWrapper from "../Components/SectionWrapper";
import {experiences, interests, skills} from "../Data/Resume.json";
import {camelCase} from "lodash/string";
import {DownloadIcon} from "@heroicons/react/outline"
import {MailIcon} from "@heroicons/react/solid"
import AnimationWrapper from "../Components/AnimationWrapper";
import tw from "twin.macro";
import ScrollToTop from "../Components/ScrollToTop";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Resume = () => {
  return (
    <DefaultLayout>

      <div css={tw`py-6 text-right`}>
        <a href="../../Alexander%20Jeam%20Oro.pdf"
           download="Alexander Jeam Oro - Web Developer.pdf"
           tw="inline-flex flex-row items-center gap-1 text-gray-200 pl-3.5 pr-4 py-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-md">
          <DownloadIcon tw="w-5 h-5"/>
          <span tw="font-medium capitalize">Download</span>
        </a>
      </div>

      <SectionWrapper>
        <div tw="pb-10 mb-10 border-b border-solid border-gray-200">
          <h1 tw="text-gray-700 dark:text-gray-200 text-3xl md:text-4xl lg:text-6xl mb-3">Alexander Jeam O. Oro</h1>
          <h3 tw="text-gray-700 dark:text-gray-200 text-2xl font-light">Web Developer</h3>

          <p tw="dark:text-gray-400 mt-6">Innovative web developer with 6 years of experience in object-oriented
            programming, implementing design interfaces, testing, and debugging. Passionate about technology and
            learning new things</p>
        </div>
        <div tw="flex flex-col lg:flex-row lg:gap-28">
          <div tw="w-full lg:w-2/3">
            <h2 tw="font-medium text-2xl dark:text-gray-200 text-gray-800">Professional Experiences</h2>
            {
              experiences.map(({company, positions, descriptions}, index) => {
                const experienceKey = camelCase(company)

                return (
                  <AnimationWrapper animation="animate-fade-in" triggerOnce key={experienceKey} delay={index * 50}>
                    <div tw="relative block py-3 space-y-0.5">
                      <h3 tw="text-gray-700 font-medium dark:text-gray-200 text-lg">{company}</h3>
                      {
                        positions.map(({title, duration}) => (
                          <div
                            tw="inline-flex items-start font-normal flex-col text-gray-600 md:flex-row md:items-center dark:text-gray-400"
                            key={experienceKey + camelCase(title)}>
                            <span tw="md:pr-2">{title}</span>
                            <span tw="w-0.5 h-3.5 relative bg-gray-400 hidden md:block"/>
                            <span tw="md:pl-2">{duration.start} - {duration.end}</span>
                          </div>
                        ))
                      }

                      <ul tw="list-disc list-inside text-gray-700 dark:text-gray-200 leading-8">
                        {
                          descriptions.map((description, index) => (
                            <li key={experienceKey + index}>{description}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </AnimationWrapper>
                )
              })
            }
          </div>

          <div tw="w-full lg:w-1/3 space-y-5">
            <div tw="relative">
              <h2 tw="font-medium text-2xl dark:text-gray-200 text-gray-800 mb-2">Contacts</h2>

              <div tw="space-y-1">
                <div tw="inline-flex items-center flex-row text-gray-700 dark:text-gray-200 space-x-1">
                  <MailIcon tw="w-5 h-5 mr-0.5"/>
                  <a href="mailto:alexanderjeamoro@gmail.com" tw="hover:underline">alexanderjeamoro@gmail.com</a>
                </div>

                <div tw="inline-flex items-center flex-row text-gray-700 dark:text-gray-200 space-x-1.5">
                  <FontAwesomeIcon icon={faGithub} fixedWidth tw="w-5 h-5"/>
                  <a href="https://github.com/oroalej" rel="noreferrer" target="_blank"
                     tw="hover:underline inline-flex flex-wrap flex-row items-start" className="group">
                    <span>https://github.com/oroalej/</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt}
                                     tw="w-2 h-2 ml-0.5 transition-opacity duration-75 opacity-0 group-hover:opacity-100 text-red-500"/>
                  </a>
                </div>

                <div tw="inline-flex items-center flex-row text-gray-700 dark:text-gray-200 space-x-1.5">
                  <FontAwesomeIcon icon={faLinkedin} fixedWidth tw="w-5 h-5"/>
                  <a href="https://www.linkedin.com/in/alexander-jeam-oro/" rel="noreferrer" target="_blank"
                     tw="hover:underline inline-flex flex-wrap flex-row items-start" className="group">
                    <span>@alexander-jeam-oro/</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt}
                                     tw="w-2 h-2 ml-0.5 transition-opacity duration-75 opacity-0 group-hover:opacity-100 text-red-500"/>
                  </a>
                </div>
              </div>
            </div>

            <div tw="relative">
              <h2 tw="font-medium text-2xl dark:text-gray-200 text-gray-800">Education</h2>

              <p tw="font-medium mt-3 text-gray-700 dark:text-gray-200">Ateneo de Naga University</p>
              <span tw="block text-gray-600 dark:text-gray-400">B.S Information Technology</span>
              <span tw="block text-gray-600 dark:text-gray-400">2009 - 2015</span>
            </div>

            <div tw="relative">
              <h2 tw="font-medium text-2xl dark:text-gray-200 text-gray-800">Skills</h2>

              <div
                tw="relative grid grid-cols-2 grid-flow-row py-3 gap-1.5 w-full text-gray-700 dark:text-gray-200 capitalize">
                {skills.map(entry => <span key={entry}>{entry}</span>)}
              </div>
            </div>

            <div tw="relative">
              <h2 tw="font-medium text-2xl dark:text-gray-200 text-gray-800">Interests</h2>

              <div tw="relative grid grid-cols-2 grid-flow-row py-3 gap-1.5 w-full text-gray-700 dark:text-gray-200">
                {interests.map(entry => <span key={entry}>{entry}</span>)}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <ScrollToTop/>
    </DefaultLayout>
  )
}

export default Resume;
