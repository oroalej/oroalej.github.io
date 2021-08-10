import {MoonIcon, SunIcon} from "@heroicons/react/solid";
import {useContext} from "react";
import {ThemeContext} from "../Context/ThemeContext";
import tw from "twin.macro";

const ThemeToggle = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div css={tw`relative cursor-pointer h-9`}>
      <div
        css={[tw`p-1 rounded-full w-16 h-9 bg-gradient-to-r`, theme === 'dark' ? tw`from-gray-400 to-gray-200` : tw`from-sky-200 to-sky-300`]}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      </div>
      <span css={[tw`absolute top-1 rounded-full h-7 w-7 inline-flex items-center justify-center pointer-events-none transition-all duration-300`, theme === 'dark' ? tw`left-8 bg-gray-800` : tw`left-1 bg-white`]}>
          {theme === 'dark' ? <MoonIcon tw="h-4.5 w-4.5 text-yellow-300"/> :
            <SunIcon tw="h-4.5 w-4.5 text-yellow-400"/>}
      </span>
    </div>
  )
}

export default ThemeToggle;
