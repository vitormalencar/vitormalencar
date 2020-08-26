import React from "react"

export const Talks = ({ talks }) => (
  <div id="talks" className="md:pt-88">
    <h2 className="sticky top-0 z-40 pt-24 text-sm font-bold tracking-widest uppercase md:sr-only text-zenith">
      Talks
    </h2>
    <div className="flex flex-wrap -my-4 md:-m-4 group pt-32 pb-40 md:py-0">
      {talks.map(({ place, date, title, url }) => (
        <article
          key={title}
          itemScope="itemscope"
          itemType="http://schema.org/CreativeWork"
          className="flex-none w-full my-4 md:m-4 md:w-240 md:min-h-240 lg:w-320 lg:min-h-320  "
          style={{ transform: "translateY(-2.9px)" }}
        >
          <div className="flex flex-col rounded justify-between w-full h-full p-40 min-h-inherit bg-dusk md:group-hover:opacity-50 md:hover:scale-11/10x md:hover:opacity-important transition ">
            <header>
              <h4
                itemProp="name"
                className="text-xs font-bold tracking-widest uppercase text-zenith"
              >
                {place}
              </h4>
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
            <footer className="mt-16">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center mt-px text-zenith"
              >
                <span>Slides</span>
                <span className="block w-16 p-2 ml-4 text-dawn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className="flex-none stroke-current"
                  >
                    <title>External link icon</title>
                    <path d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z" />
                    <path d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z" />
                  </svg>
                </span>
              </a>
            </footer>
          </div>
        </article>
      ))}
    </div>
  </div>
)
