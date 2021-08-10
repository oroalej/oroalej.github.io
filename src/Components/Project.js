import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {camelCase} from "lodash/string";
import tw from "twin.macro";

const Project = ({project}) => {
  return (
    <div css={tw`rounded-lg`}>
      <div tw="leading-tight">
        <p
          tw="mb-0 text-2xl font-light dark:text-gray-200 transition-colors duration-200">{project.name}</p>
        <a href={project.link} rel="noreferrer" target="_blank"
           tw="hover:underline inline-flex items-center" className="group">

          {project.link && (
            <>
              <span
                tw="text-sm font-normal hover:underline hover:text-blue-600 dark:text-gray-200">{project.link}</span>

              <FontAwesomeIcon icon={faExternalLinkAlt}
                               tw="w-2 h-2 ml-0.5 transition-opacity duration-75 opacity-0 group-hover:opacity-100 dark:text-red-500"/>
            </>
          )}
        </a>
      </div>

      <div tw="relative h-56 overflow-hidden my-3">
        <img tw="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
             src="https://images.pexels.com/photos/2363814/pexels-photo-2363814.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
             alt=""/>

        {project.github && <a href={project.github}
                              rel="noreferrer"
                              target="_blank"
                              tw="px-2 py-1.5 m-0 absolute top-0 right-0 z-10 bg-transparent text-gray-700 hover:text-gray-800 transform hover:scale-110 transition-transform">
          <FontAwesomeIcon icon={faGithub} fixedWidth tw="w-6 h-6 "/>
        </a>}
      </div>

      <div tw="flex flex-row flex-wrap gap-1.5">
        {project.technologies.map(tech => (
          <span tw="px-2 py-0.5 rounded bg-sky-100 text-sm text-sky-800 dark:bg-gray-100 capitalize"
                key={camelCase(tech)}>{tech}</span>
        ))}
      </div>
    </div>
  )
}

export default Project;
