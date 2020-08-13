import React from "react"

export const Work = ({ work }) => (
  <div id="projects" className="md:pt-88 md:-mt-96">
    <h2 className="sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith">
      Work
    </h2>
    <div className="-my-8 group pt-32 pb-40 md:py-0  ">
      {work.map(({ title, description, url }) => (
        <article
          key={title}
          itemScope="itemscope"
          itemType="http://schema.org/CreativeWork"
          className="transition md:group-hover:opacity-50 md:hover:opacity-important md:hover:scale-11/10x my-8 bg-dusk"
        >
          <a href={url} target="_blank" rel="noreferrer" className="block p-40">
            <p className="text-xs font-bold tracking-widest uppercase text-zenith">
              Work Experience
            </p>
            <h3 className="mt-8 text-lg  font-semibold leading-tight text-zenith">
              {title}
            </h3>
            <p className="mt-8">{description}</p>
          </a>
        </article>
      ))}
    </div>
  </div>
)
