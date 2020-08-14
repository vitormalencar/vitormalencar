import React from "react"

export const Projects = ({ projects }) => (
  <div id="projects" className="md:pt-88 md:pb-88 md:-mt-96">
    <h2 className="sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith">
      Projects
    </h2>
    <div className="-my-8 group pt-32 pb-40 br-20  md:py-0">
      {projects.map(({ title, description, url }) => (
        <article
          key={title}
          itemScope="itemscope"
          itemType="http://schema.org/CreativeWork"
          className="bg-dusk transition md:group-hover:opacity-50 md:hover:opacity-important md:hover:scale-11/10x my-8 rounded"
        >
          <a href={url} target="_blank" rel="noreferrer" className="block p-40">
            <p className="text-xs font-bold tracking-widest uppercase text-zenith">
              Community
            </p>
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
