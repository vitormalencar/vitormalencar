import React from "react"
import useSound from "use-sound"
import popDown from "../../sounds/pop-down.mp3"

export const Talks = ({ talks }) => {
  const soundUrl = popDown
  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 })
  return (
    <div id="talks" className="md:pt-88">
      <h2 className="sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith">
        Talks
      </h2>
      <div className="block md:flex flex-wrap -my-4 md:-m-4 group pt-32 pb-40 md:py-0">
        {talks.map(({ place, date, title, url }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center mt-px text-zenith"
            aria-label={`Read more about ${title}`}
            onMouseEnter={play}
            onMouseLeave={stop}
          >
            <article
              itemScope="itemscope"
              itemType="http://schema.org/CreativeWork"
              className="w-full my-4 md:m-4 md:w-240 md:min-h-240 lg:w-320 lg:min-h-320 flex-auto"
              style={{ transform: "translateY(-2.9px)" }}
            >
              <span style={{ opacity: 0 }}>{title}</span>
              <div className="flex flex-col rounded-xl justify-between w-full h-full p-40 min-h-inherit bg-dusk md:group-hover:opacity-50 md:hover:scale-11/10x md:hover:opacity-important transition ">
                <header>
                  <h3
                    style={{
                      background:
                        "linear-gradient(92.05deg, #BCA1F7 12.09%, #E577B4 42.58%, #FF7170 84.96%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      WebkitBoxDecorationBreak: "clone",
                    }}
                    itemProp="name"
                    className="text-xs font-bold tracking-widest uppercase text-purble"
                  >
                    {place}
                  </h3>
                  <div className="flex flex-col mt-8">
                    <time
                      itemProp="startDate"
                      dateTime="2020-06-23"
                      content="2020-06-23"
                      className="inline-block"
                    >
                      {date}
                    </time>
                  </div>
                </header>
                <div className="flex flex-col mt-24">
                  <h3
                    itemProp="name"
                    className="text-lg font-semibold leading-tight text-zenith"
                  >
                    {title}
                  </h3>
                </div>
                <footer className="mt-16"></footer>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  )
}
