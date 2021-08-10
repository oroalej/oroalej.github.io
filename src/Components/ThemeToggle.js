import {MoonIcon, SunIcon} from "@heroicons/react/solid";
import {useContext} from "react";
import {ThemeContext} from "../Context/ThemeContext";

const ThemeToggle = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <div className="relative cursor-pointer h-9">
      <div
        className={`p-1 rounded-full w-16 h-9 bg-gradient-to-r ${theme === 'dark' ? 'from-gray-400 to-gray-200' : 'from-sky-200 to-sky-300'}`}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      </div>
      <span className={`absolute top-1 rounded-full h-7 w-7 inline-flex items-center justify-center pointer-events-none transition-all duration-300 ${theme === 'dark' ? 'left-8 bg-gray-800' : 'left-1 bg-white'}`}>
          {theme === 'dark' ? <MoonIcon className="h-4.5 w-4.5 text-yellow-300"/> :
            <SunIcon className="h-4.5 w-4.5 text-yellow-400"/>}
      </span>
    </div>
  )
}

export default ThemeToggle;
