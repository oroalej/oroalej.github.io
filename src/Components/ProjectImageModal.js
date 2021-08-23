import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {GlobeIcon, XIcon} from "@heroicons/react/outline";
import Modal from "./Modal";
import {useEffect, useState} from "react";
import tw from "twin.macro"
import {camelCase} from "lodash/string";

const ProjectImageModal = ({isOpen, handleCloseModal, project}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleImageChange = (index) => {
    setActiveIndex(prev => {
      return index
    })
  }

  useEffect(() => {
    if (isOpen === false) {
      setTimeout(() => setActiveIndex(0), 300)
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div css={tw`relative h-full`}>
        <div tw="block lg:pt-6 lg:px-6">
          <div
            tw="flex flex-col-reverse lg:gap-4 lg:flex-row justify-between w-full lg:pb-3 lg:mb-4 lg:border-b-2 border-solid border-gray-300 dark:border-gray-600 border-opacity-80">
            <div tw="px-3 sm:px-5 pt-2 pb-5 lg:p-1.5 inline-flex flex-row flex-nowrap gap-3 items-center overflow-x-auto min-w-full lg:min-w-0 border-b-2 lg:border-b-0 border-solid border-gray-300 dark:border-gray-600 border-opacity-80">
              {project.gallery.map((image, index) => (
                <div
                  css={[tw`relative w-20 h-14 sm:w-28 sm:h-20 overflow-hidden cursor-pointer rounded-md transition`, index === activeIndex && tw`ring-2 ring-gray-700 dark:ring-gray-600 ring-offset-2 dark:ring-offset-gray-800 `]}
                  style={{minWidth: '80px'}}
                  onClick={() => handleImageChange(index)}
                  key={camelCase(project.name) + index}
                >
                  <img
                    src={image}
                    alt=""
                    tw="object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"/>
                </div>
              ))}
            </div>

            <div tw="p-3 lg:p-0 sm:p-5 inline-flex flex-wrap flex-row lg:flex-col sm:mr-16 justify-start gap-4 items-start lg:items-end">
              <p tw="text-gray-900 dark:text-gray-200 select-all text-lg text-xl leading-none">
                {project.name}
              </p>

              <div tw="hidden sm:inline-flex flex-row gap-4 lg:justify-end">
                {project.github && (
                  <a href={project.github} rel="noreferrer" target="_blank"
                     tw="text-gray-700 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faGithub} size="lg"/>
                  </a>
                )}

                {project.link && (
                  <a href={project.link} rel="noreferrer" target="_blank"
                     tw="text-gray-700 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white transition-colors">
                    <GlobeIcon
                      tw="w-6 h-6"/>
                  </a>
                )}
              </div>
            </div>

            <span
              tw="p-2 cursor-pointer absolute right-2 lg:right-3 top-2 lg:top-4 z-10 text-gray-800 dark:text-gray-200 dark:hover:text-white transition-colors"
              onClick={handleCloseModal}>
                <XIcon tw="w-5 h-5 sm:w-7 sm:h-7"/>
              </span>
          </div>
        </div>

        <div tw="relative overflow-y-auto lg:pb-4" className="project-image__preview">
          <div tw="max-w-screen-sm md:max-w-screen-md xl:max-w-screen-xl mx-auto p-3 lg:p-0 lg:px-0 flex justify-center items-center">
            <img src={project.gallery[activeIndex]} alt="" tw="rounded-md"/>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProjectImageModal;
