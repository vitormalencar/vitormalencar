import React from "react"

type Props = { social: { name: string; url: string }[] }

const Social = ({ social }: Props) => (
  <div className="flex items-center w-full mt-32">
    <ul className="flex -mx-16 text-zenith">
      {social.map(({ name, url }) => (
        <li key={name} className="mx-16">
          <a
            href={url}
            rel="noreferrer"
            target="_blank"
            className="flex items-center"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Social
