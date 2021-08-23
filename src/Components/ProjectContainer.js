import Project from "./Project";
import useModal from "../Hooks/useModal";
import ProjectImageModal from "./ProjectImageModal";

const ProjectContainer = ({project}) => {
  const {isOpen, handleCloseModal, handleOpenModal} = useModal();

  return (
    <>
      <Project project={project} onOpenModal={handleOpenModal}/>
      <ProjectImageModal isOpen={isOpen} handleCloseModal={handleCloseModal} project={project}/>
    </>
  )
}

export default ProjectContainer;
