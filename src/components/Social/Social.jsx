import React from "react"

export const Social = ({ social }) => (
  <div className="flex items-center w-full mt-32 md:mt-72">
    <ul className="flex -mx-16 text-zenith">
      {social.map(({ name, url }) => (
        <li key={name} className="mx-16">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)
