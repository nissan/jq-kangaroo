/** @type {import('tailwindcss').Config} */
const { uiConfig } = require("./config/ui");

const plugins = [];
if (uiConfig.enabledFrameworks.daisyui) {
  plugins.push(require("daisyui"));
}

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins,
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  daisyui: uiConfig.enabledFrameworks.daisyui
    ? {
        themes: [
          {
            light: {
              primary: "#93BBFB",
              "primary-content": "#212638",
              secondary: "#DAE8FF",
              "secondary-content": "#212638",
              accent: "#93BBFB",
              "accent-content": "#212638",
              neutral: "#212638",
              "neutral-content": "#ffffff",
              "base-100": "#ffffff",
              "base-200": "#f4f8ff",
              "base-300": "#DAE8FF",
              "base-content": "#212638",
              info: "#93BBFB",
              success: "#34EEB6",
              warning: "#FFCF72",
              error: "#FF8863",
              "--rounded-btn": "9999rem",
              ".tooltip": { "--tooltip-tail": "6px" },
              ".link": { textUnderlineOffset: "2px" },
              ".link:hover": { opacity: "80%" },
            },
          },
          {
            dark: {
              primary: "#212638",
              "primary-content": "#F9FBFF",
              secondary: "#323f61",
              "secondary-content": "#F9FBFF",
              accent: "#4969A6",
              "accent-content": "#F9FBFF",
              neutral: "#F9FBFF",
              "neutral-content": "#385183",
              "base-100": "#385183",
              "base-200": "#2A3655",
              "base-300": "#212638",
              "base-content": "#F9FBFF",
              info: "#385183",
              success: "#34EEB6",
              warning: "#FFCF72",
              error: "#FF8863",
              "--rounded-btn": "9999rem",
              ".tooltip": { "--tooltip-tail": "6px", "--tooltip-color": "oklch(var(--p))" },
              ".link": { textUnderlineOffset: "2px" },
              ".link:hover": { opacity: "80%" },
            },
          },
        ],
      }
    : false,
  theme: {
    extend: {
      boxShadow: { center: "0 0 12px -2px rgb(0 0 0 / 0.05)" },
      animation: { "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};
