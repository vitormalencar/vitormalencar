import React from "react"

import Hero from "./Hero"
import Work from "./Work"
import Talks from "./Talks"
import Social from "./Social"
import Projects from "./Projects"

import { useHasScrolled } from "../hooks/useHasScrolled"
import Data from "../../data.json"

const App = () => {
  const shift = useHasScrolled(550)
  return (
    <>
      <div className="relative flex flex-col w-screen mx-auto font-sans text-base max-w-1440 text-dawn md:flex-row">
        <div className="md:hidden">
          <div
            className={`fixed top-0 left-0 z-30 w-full h-64 transition bg-dusk ${
              shift ? "shift-0" : "-shift-y-64"
            }`}
          ></div>
          <div
            className={`fixed top-0 left-0 z-50 w-full h-64 transition  ${
              shift ? "shift-0" : "-shift-y-64"
            }`}
          >
            <div className="absolute top-0 w-full h-24 gradient-y-dusk-transparent"></div>
            <div className="absolute bottom-0 w-full h-24 gradient-y-transparent-dusk"></div>
          </div>
          <div
            className={`fixed top-0 left-0 z-50 w-full h-32 mt-64 transition gradient-y-night-transparent ${
              shift ? "shift-0" : "-shift-y-96"
            }`}
          ></div>
        </div>
        <div className="static flex flex-col justify-between w-full p-32 md:max-w-408 lg:max-w-496 md:fixed md:h-screen lg:py-80 lg:pl-88 md:pr-0">
          <div className="flex flex-col">
            <Hero about={Data.about} />
          </div>
          <Social social={Data.social} />
        </div>
        <div className="static p-32 md:max-w-536 lg:max-w-736 md:absolute md:right-0 lg:py-80 lg:pr-88 md:pl-0">
          <Projects projects={Data.projects} />
          <Work work={Data.work} />
          <Talks talks={Data.talks} />
        </div>
        <div className="fixed bottom-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-transparent-night"></div>
        <div className="fixed top-0 left-0 z-20 w-full h-32 pointer-events-none gradient-y-night-transparent"></div>
      </div>
    </>
  )
}

export default App
