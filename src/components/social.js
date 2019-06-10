import React from "react"
import Icon from "./Icon"
import "./social.css"

const Social = ({ social }) => (
  <div className="info-footer">
    <div className="info-footer__social">
      {social.map((item, index) => (
        <a
          key={index}
          href={`${item.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`info-footer__social-icon--${item.name}`}
        >
          <Icon
            title={item.name}
            icon={`${item.name}`}
            color="#444444"
            size="30"
          />
        </a>
      ))}
    </div>
  </div>
)

export default Social
