import DefaultLayout from "../Layouts/DefaultLayout";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {ArrowNarrowDownIcon, ChevronUpIcon, LinkIcon} from "@heroicons/react/solid";
import Project from "../Components/Project";
import AnimationWrapper from "../Components/AnimationWrapper";
import Projects from "../Data/Projects.json";
import Skills from "../Data/Skills.json";
import tw from 'twin.macro'

import {camelCase} from "lodash/string";
import SectionWrapper from "../Components/SectionWrapper";
import ContactMe from "../Components/ContactMe";

const Home = () => {
  return (
    <DefaultLayout>
      <div tw="max-h-screen flex flex-col">
        <div tw="flex-1 py-28 lg:py-40 flex flex-row items-center justify-between">
          <div tw="inline-flex flex-col">
            <div
              tw="text-3xl lg:text-6xl font-extrabold leading-none font-mono text-gray-700 dark:text-gray-200 transition-colors duration-200">
              <span tw="block">Alexander Jeam</span>
              <span tw="block">Oro</span>
            </div>
            <div className="relative block overflow-hidden">
              <span
                tw="block text-xl font-normal text-gray-700 leading-loose mt-2 dark:text-gray-200 transition-colors duration-200">Web Developer</span>
            </div>
            <div
              tw="inline-flex flex-row items-start justify-self-start text-gray-700 space-x-6 mt-8 dark:text-gray-200 transition-colors duration-200">
              <AnimationWrapper animation={`animate-fade-in`}>
                <a href="https://www.linkedin.com/in/alexander-jeam-oro/" rel="noreferrer" target="_blank"
                   tw="cursor-pointer hover:text-gray-800 dark:hover:text-white">
                  <FontAwesomeIcon icon={faLinkedin} tw="text-xl" fixedWidth/>
                </a>
              </AnimationWrapper>

              <AnimationWrapper animation={`animate-fade-in`} delay={200}>
                <a href="https://github.com/oroalej" rel="noreferrer" target="_blank"
                   tw="cursor-pointer hover:text-gray-800 dark:hover:text-white">
                  <FontAwesomeIcon icon={faGithub} tw="text-xl" fixedWidth/>
                </a>
              </AnimationWrapper>

              <AnimationWrapper animation={`animate-fade-in`} delay={400}>
                <a href="mailto:alexanderjeamoro@gmail.com"
                   tw="cursor-pointer hover:text-gray-800 dark:hover:text-white">
                  <FontAwesomeIcon icon={faEnvelope} tw="text-xl" fixedWidth/>
                </a>
              </AnimationWrapper>
            </div>
          </div>
        </div>

        <div tw="inline-flex flex-col justify-center items-center mb-10">
          <p tw="mb-6 inline-flex flex-row flex-wrap">
              <span
                tw="font-medium text-3xl text-gray-600 font-sans dark:text-gray-200 transition-colors duration-200">Projects</span>
            <LinkIcon
              tw="w-4 h-4 ml-1 mt-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors dark:text-gray-200 dark:hover:text-red-500"/>
          </p>

          <a href="#portfolio">
            <ArrowNarrowDownIcon
              tw="w-10 h-12 text-gray-600 transform animate-bounce duration-1000 ease-out mx-auto cursor-pointer dark:text-gray-200 transition-colors duration-200"/>
          </a>
        </div>
      </div>

      <SectionWrapper  id="portfolio">
        <div tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {Projects.map((project, index) => (
            <AnimationWrapper triggerOnce animation={`animate-slide-up-bounce`} key={camelCase(project.name)}
                              delay={index * 50}>
              <Project project={project}/>
            </AnimationWrapper>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 tw="inline-flex">
          <span tw="font-medium text-3xl text-gray-600 font-sans text-left dark:text-gray-200 transition-colors duration-200">Skills</span>
          <LinkIcon tw="w-4 h-4 ml-1.5 mt-1 text-gray-700 hover:text-blue-600 dark:hover:text-red-500 dark:text-gray-200 cursor-pointer transition-colors"/>
        </h2>

        <div tw="mb-7 w-full text-gray-700 dark:text-gray-200 transition-colors duration-200">
          {Skills.map(({title, list}, index) => (
            <div key={title + index} tw="mb-6">
              <h3 tw="text-lg font-semibold font-sans my-3 capitalize">{title}:</h3>

              <AnimationWrapper animation="animate-fade-in" delay={index * 200} triggerOnce>
                <div tw="grid sm:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4">
                  {list.map(({icon, text, highlighted, className}, index) => (
                    <div tw="inline-flex flex-row gap-1" key={text + index}>
                      <img src={icon} alt={text} css={[className === 'string' ? className : tw`w-6 h-6`]}/>
                      <span css={[tw`select-all`, highlighted && tw`font-medium`]}>{text}</span>
                    </div>
                  ))}
                </div>
              </AnimationWrapper>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <div
        tw="fixed bottom-5 right-5 rounded-full w-12 h-12 bg-red-400 text-white inline-flex justify-center items-center cursor-pointer hover:bg-red-500 transition-colors">
        <ChevronUpIcon tw="w-8 h-8"/>
      </div>

      <ContactMe/>
    </DefaultLayout>
  )
}

export default Home;
