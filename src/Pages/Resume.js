import DefaultLayout from "../Layouts/DefaultLayout";
import SectionWrapper from "../Components/SectionWrapper";
import {experiences, skills, interests} from "../Data/Resume.json";
import {camelCase} from "lodash/string";
import {DownloadIcon, GlobeAltIcon, ExternalLinkIcon} from "@heroicons/react/outline"
import {MailIcon} from "@heroicons/react/solid"
import AnimationWrapper from "../Components/AnimationWrapper";
const Resume = () => {
  return (
    <DefaultLayout>

      <div className="py-6 text-right">
        <button className="inline-flex flex-row items-center gap-1 text-gray-200 pl-3.5 pr-4 py-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-md">
          <DownloadIcon className="w-5 h-5"/>
          <span className="font-medium capitalize">Download</span>
        </button>
      </div>

      <SectionWrapper>
        <div className="pb-10 mb-10 border-b border-solid border-gray-200">
          <h1 className="text-gray-700 dark:text-gray-200 text-3xl md:text-4xl lg:text-6xl mb-3">Alexander Jeam O. Oro</h1>
          <h3 className="text-gray-700 dark:text-gray-200 text-2xl font-light">Web Developer</h3>

          <p className="dark:text-gray-400 mt-6">Innovative web developer with 6 years of experience in object-oriented programming, implementing design interfaces, testing, and debugging. Passionate about technology and learning new things</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-28">
          <div className="w-full lg:w-2/3">
            <h2 className="font-medium text-2xl dark:text-gray-200 text-gray-800">Professional Experience</h2>
            {
              experiences.map(({company, positions, descriptions}, index) => {
                const experienceKey = camelCase(company)

                return (
                  <AnimationWrapper animation="animate-fade-in" triggerOnce key={experienceKey} delay={index * 50}>
                    <div className="relative block py-3 space-y-0.5">
                      <h3 className="text-gray-700 font-medium dark:text-gray-200 text-lg">{company}</h3>
                      {
                        positions.map(({title, duration}) => (
                          <div className="inline-flex items-start font-base flex-col text-gray-600 md:flex-row md:items-center dark:text-gray-400"
                               key={experienceKey + camelCase(title)}>
                            <span className="md:pr-2">{title}</span>
                            <span className="w-0.5 h-3.5 relative bg-gray-400 hidden md:block"/>
                            <span className="md:pl-2">{duration.start} - {duration.end}</span>
                          </div>
                        ))
                      }

                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 leading-8">
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

          <div className="w-full lg:w-1/3 space-y-5">
            <div className="relative">
              <h2 className="font-medium text-2xl dark:text-gray-200 text-gray-800 mb-2">Contact</h2>

              <div className="space-y-1">
                <div className="inline-flex items-center flex-row text-gray-700 dark:text-gray-200 space-x-1">
                  <MailIcon className="w-5 h-5" />
                  <a href="mailto:alexanderjeamoro@gmail.com" className="hover:underline">alexanderjeamoro@gmail.com</a>
                </div>

                <div className="inline-flex items-center flex-row text-gray-700 dark:text-gray-200 space-x-1.5">
                  <GlobeAltIcon className="w-5 h-5" />
                  <a href="https://oroalej.github.io/" rel="noreferrer" target="_blank" className="group hover:underline inline-flex flex-wrap flex-row items-start">
                    <span>https://oroalej.github.io/</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <h2 className="font-medium text-2xl dark:text-gray-200 text-gray-800">Education</h2>

              <p className="font-medium mt-3 text-gray-700 dark:text-gray-200">Ateneo de Naga University</p>
              <span className="block text-gray-600 dark:text-gray-400">B.S Information Technology</span>
              <span className="block text-gray-600 dark:text-gray-400">2009 - 2015</span>
            </div>

            <div className="relative">
              <h2 className="font-medium text-2xl dark:text-gray-200 text-gray-800">Skills</h2>

              <div className="h-50">
                <div className="relative grid grid-cols-2 grid-flow-row py-3 gap-1.5 w-full text-gray-700 dark:text-gray-200 capitalize">
                  {skills.map(entry => <span key={entry}>{entry}</span>)}
                </div>
              </div>
            </div>

            <div className="relative">
              <h2 className="font-medium text-2xl dark:text-gray-200 text-gray-800">Interests</h2>

              <div className="h-50">
                <div className="relative grid grid-cols-2 grid-flow-row py-3 gap-1.5 w-full text-gray-700 dark:text-gray-200">
                  {interests.map(entry => <span key={entry}>{entry}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </DefaultLayout>
  )
}

export default Resume;
