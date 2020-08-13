import React from "react"

import { Hero } from "./Hero/Hero"
import { Work } from "./Work/Work"
import { Talks } from "./Talks/Talks"
import { Social } from "./Social/Social"
import { Projects } from "./Projects/Projects"
import { Interviews } from "./Interviews/Interviews"

import { work, social, about, talks, projects } from "../../data.json"

const App = () => (
  <div className="relative flex flex-col w-screen mx-auto font-sans text-base max-w-1440 text-dawn md:flex-row">
    <div className="static flex flex-col justify-between w-full p-32 md:max-w-408 lg:max-w-496 md:fixed md:h-screen lg:py-88 lg:pl-88 md:pr-0">
      <div className="flex flex-col">
        <Hero about={about} />
      </div>
      <Social social={social} />
    </div>
    <div className="static p-32 md:max-w-536 lg:max-w-736 md:absolute md:right-0 lg:py-88 lg:pr-88 md:pl-0">
      <Projects projects={projects} />
      <Work work={work} />
      <Talks talks={talks} />
      <Interviews />
    </div>
  </div>
)

export default App
