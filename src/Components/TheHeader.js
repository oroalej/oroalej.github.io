import {NavLink} from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import tw from "twin.macro"

const TheHeader = () => {
  return (
    <div css={tw`flex justify-between items-center flex-row py-2 z-50`}>
      <div tw="inline-flex flex-wrap flex-row gap-6">
        <NavItem exact to="/">
          Home
        </NavItem>
        <NavItem to="/resume">
          Résumé
        </NavItem>
      </div>

      <ThemeToggle/>
    </div>
  )
}

const NavItem = ({to, children, ...attributes}) => (
  <NavLink {...attributes} to={to} activeClassName="dark:border-gray-200 border-gray-700"
           tw="text-base capitalize font-medium leading-normal inline-flex flex-row justify-start items-center px-4 py-3 text-gray-700 dark:text-white cursor-pointer transition-colors duration-100 border-b-4 border-solid hover:border-gray-700 dark:hover:border-gray-200"
           className="border-transparent">
    {children}
  </NavLink>
)

export default TheHeader;
