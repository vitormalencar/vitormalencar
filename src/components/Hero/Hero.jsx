import React from "react"
import Fade from "react-reveal/Fade"
import AboutImg from "../Image/AboutImg"

export const Hero = ({ about }) => (
  <div>
    <div className="pb-40 lg:mt-80 md:mt-120">
      <AboutImg />
    </div>
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h2 className="text-2xl whitespace-pre font-bold leading-tight lg:text-4xl lg:leading-none text-zenith">
        {about.title}
      </h2>
    </Fade>
    <div className="leading-loose">
      <p
        dangerouslySetInnerHTML={{ __html: about.paragraphOne }}
        className="mt-32 whitespace-pre-line  lg:text-md "
      />
    </div>
  </div>
)
