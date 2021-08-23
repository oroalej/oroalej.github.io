import {useState} from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  return {
    isOpen,
    handleCloseModal,
    handleOpenModal
  }
}

export default useModal;
