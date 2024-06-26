import type {Config} from "tailwindcss"

const fontFamilyConfig: any = {}

if (process.env.CUSTOM_SANS_FONT) {
  fontFamilyConfig.sans = process.env.CUSTOM_SANS_FONT
}
if (process.env.CUSTOM_MONO_FONT) {
  fontFamilyConfig.mono = process.env.CUSTOM_MONO_FONT
}
if (process.env.CUSTOM_HEADING_FONT) {
  fontFamilyConfig.heading = process.env.CUSTOM_HEADING_FONT
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: fontFamilyConfig
    },
  },
  plugins: [],
};
export default config;
