import React from "react"
import useSound from "use-sound"
import bite from "../sounds/bite.mp3"

type Props = {
  projects: {
    title: string
    description: string
    url: string
  }[]
}

 const Projects = ({ projects }: Props) => {
  const soundUrl = bite
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 })
  return (
    <div id="projects" className="md:pt-88 md:pb-88 md:-mt-96">
      <h2 className="sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith">
        Projects
      </h2>

      <div className="-my-8 group pt-32 pb-40 br-20  md:py-0">
        {projects.map(({ title, description, url }) => (
          <article
            key={title}
            itemScope={true}
            itemType="http://schema.org/CreativeWork"
            className="bg-dusk transition md:group-hover:opacity-50 md:hover:opacity-important md:hover:scale-11/10x my-16 rounded-xl"
          >
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="block p-40"
              onMouseEnter={() => play()}
              onMouseLeave={() => stop()}
            >
              <div className="flex">
                <p
                  style={{
                    background:
                      "linear-gradient(92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    WebkitBoxDecorationBreak: "clone",
                  }}
                  className="text-xs font-bold tracking-widest uppercase"
                >
                  Community
                </p>
              </div>
              <h3
                itemProp="name"
                className="mt-8 text-lg font-semibold leading-tight text-zenith"
              >
                {title}
              </h3>
              <p className="mt-8">{description}</p>
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects