const colors = {
  dusk: "#202022",
  dawn: "#8A8F98",
  night: "#121212",
  zenith: "#ffffff",
  purble: "#515cc3",
  sunrise: "#F7F8F8",
  begonia: " #FF7170",
  paleViolet: "#BCA1F7",
  middlePurple: " #E577B4",
}

const spacing = {
  inherit: "inherit",
  px: "1px",
  0: "0",
  2: "2px",
  4: "4px",
  8: "8px",
  16: "16px",
  24: "24px",
  32: "32px",
  40: "40px",
  48: "48px",
  56: "56px",
  64: "64px",
  72: "72px",
  80: "80px",
  88: "88px",
  96: "96px",
  104: "104px",
  112: "112px",
  120: "120px",
  160: "160px",
  240: "240px",
  296: "296px",
  320: "320px",
  360: "360px",
  384: "384px",
  408: "408px",
  496: "496px",
  528: "528px",
  536: "536px",
  736: "736px",
  1440: "1440px",
}

const fontSize = {
  xs: "10px",
  sm: "12px",
  base: "14px",
  md: "18px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "56px",
  "4xl": "64px",
  "5xl": "72px",
  "6xl": "80px",
  "7xl": "88px",
}

const breakpoints = {
  sm: 640,
  md: 992,
  lg: 1280,
  xl: 1440,
}

const screens = Object.assign(
  {},
  ...Object.keys(breakpoints).map((breakpoint) => ({
    [breakpoint]: `${breakpoints[breakpoint]}px`,
  }))
)

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
      opacity: { important: "1 !important" },
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
      addUtilities(newUtilities, ["responsive", "hover", "group-hover"])
    },
  ],
}
