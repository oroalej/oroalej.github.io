import {ThemeProvider} from "../Context/ThemeContext";
import TheHeader from "../Components/TheHeader";
import tw from "twin.macro"

const DefaultLayout = ({children}) => {
  return (
    <ThemeProvider>
      <div css={tw`max-w-screen-sm lg:max-w-screen-lg mx-auto min-h-screen px-4`}>
        <TheHeader/>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default DefaultLayout;
