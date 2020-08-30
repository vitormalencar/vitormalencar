import React from "react"
import Fade from "react-reveal/Fade"
import AboutImg from "../Image/AboutImg"

export const Hero = ({ about }) => (
  <div>
    <div className="pb-40">
      <AboutImg />
    </div>
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h2 className="text-2xl whitespace-pre font-bold leading-tight lg:text-4xl lg:leading-none text-zenith">
        {about.title}
      </h2>
    </Fade>
    <div className="leading-loose">
      <p className="mt-32 whitespace-pre-line">{about.paragraphOne}</p>
    </div>
    <button className="md:block hidden rounded bg-purble text-white font-bold mt-40  px-160 py-16">
      Lets talk
    </button>
  </div>
)
