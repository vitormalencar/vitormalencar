import React from "react"
import Fade from "react-reveal/Fade"
import AboutImg from "../Image/AboutImg"

export const Hero = ({ about }) => (
  <div>
    <div className="pb-40 md:mt-20">
      <AboutImg />
    </div>
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h2 style={{background: 'linear-gradient(92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', WebkitBoxDecorationBreak: 'clone'}}
       className="text-2xl whitespace-pre font-bold leading-tight lg:text-4xl lg:leading-none text-zenith">
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
