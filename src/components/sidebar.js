import React from "react"

import Social from "./social"
import Image from "./image"

import "./sidebar.css"

const Sidebar = ({ social, name, role, about, mail }) => (
  <div className="sidebar_wrapper">
    <div className="about_container">
      <div className="info__elevator">
        <div className="info__headshot">
          <Image />
        </div>
        <h1 className="info__headline">
          {name}
          <br />
          {role}
        </h1>
      </div>
      <p className="info__description">{about}</p>
      <Social social={social} />
      <a href={mail} className="info__button">
        Let's talk
      </a>
    </div>
  </div>
)

export default Sidebar
