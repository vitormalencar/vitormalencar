import React from "react"
import Fade from "react-reveal/Fade"
import AboutImg from "./AboutImg"

type AboutProps = {
  about: {
    title: string
    paragraphOne: string
  }
}

 const Hero = ({ about }: AboutProps) => (
  <div>
    <div className="pb-40 md:mt-20">
      <AboutImg />
    </div>
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h2
        style={{
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitBoxDecorationBreak: "clone",
          WebkitTextFillColor: "transparent",
        }}
        className="bg-gradient-to-r from-paleViolet via-middlePurple to-begonia text-2xl whitespace-pre font-bold leading-tight lg:text-4xl lg:leading-none text-zenith"
      >
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

export default Hero