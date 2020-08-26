/* eslint-disable no-undef */
const selectorParser = require("postcss-selector-parser")

const colors = require("./tailwind/colors")
const spacing = require("./tailwind/spacing")
const fontSize = require("./tailwind/font-size")
const breakpoints = require("./tailwind/breakpoints")

const screens = Object.assign(
  {},
  ...Object.keys(breakpoints).map(breakpoint => ({
    [breakpoint]: `${breakpoints[breakpoint]}px`,
  }))
)

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.jsx"],
  theme: {
    borderRadius: {
      default: "16px",
      full: "100%",
    },

    screens,
    spacing,
    minHeight: spacing,
    maxWidth: spacing,
    fontSize,
    letterSpacing: {
      normal: "0",
      wide: "1px",
      wider: "2px",
      tight: "-1px",
      widest: "3px",
      tighter: "-2px",
      tightest: "-3px",
    },
    extend: {
      colors,
      opacity: {
        important: "1 !important",
      },
    },
  },
  variants: {
    backgroundColor: ["group-hover"],
    opacity: ["group-hover", "hover", "responsive"],
    width: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        ".transition": {
          transition: "all 0.2s ease-in-out",
        },
        ".scale-3\\/2x": {
          transform: "scale(1.5)",
        },
        ".scale-6\\/5x": {
          transform: "scale(1.2)",
        },
        ".scale-11\\/10x": {
          transform: "scale(1.1)",
        },
        ".scale-2x": {
          transform: "scale(2)",
        },
        ".shift-0": {
          transform: `translateY(${spacing["0"]})`,
        },
        ".shift-y-16": {
          transform: `translateY(${spacing["16"]})`,
        },
        ".-shift-y-64": {
          transform: `translateY(-${spacing["64"]})`,
        },
        ".-shift-y-96": {
          transform: `translateY(-${spacing["96"]})`,
        },
      }
      addUtilities(newUtilities, [
        "responsive",
        "hover",
        "group-hover",
        "group-2-hover",
      ])
    },
    function({ addVariant }) {
      addVariant("group-2-hover", ({ modifySelectors, separator }) => {
        return modifySelectors(({ selector }) => {
          return selectorParser(selectors => {
            selectors.walkClasses(sel => {
              sel.value = `group-2-hover${separator}${sel.value}`
              sel.parent.insertBefore(
                sel,
                selectorParser().astSync(".group-2:hover ")
              )
            })
          }).processSync(selector)
        })
      })
    },
  ],
}
