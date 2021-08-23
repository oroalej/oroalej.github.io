import {ChevronUpIcon} from "@heroicons/react/solid";
import tw from "twin.macro";
import {useEffect, useState} from "react";

const ScrollToTop = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    window.onscroll = () => {
      setIsTop(window.pageYOffset === 0)
    }
  }, [])

  return (
    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            css={[tw`fixed bottom-2 right-2 w-10 h-10 lg:w-12 lg:h-12 lg:bottom-5 lg:right-5 rounded-full  bg-red-400 text-white inline-flex justify-center items-center cursor-pointer hover:bg-red-500 transition-all focus:outline-none`, isTop && tw`hidden`]}>
      <ChevronUpIcon tw="w-6 h-6 lg:w-8 lg:h-8"/>
    </button>
  )
}

export default ScrollToTop;
