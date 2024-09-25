import Banner from "../../components/sections/Banner/Banner"
import My_services from "../../components/sections/My_services/My_services"
import About_Me from "../../components/sections/About_Me/About_Me"
import Skills from "../../components/sections/Skills/Skills"
import Recent_Projects from "../../components/sections/Recent_Projects/Recent_Projects"
import My_Portfolio from "../../components/sections/My_Portfolio/My_Portfolio"

const Home = () => {
  return (
    <>
      <Banner/>
      <My_services/>
      <About_Me/>
      <Skills/>
      <Recent_Projects/>
      <My_Portfolio/>
    </>
  )
}

export default Home