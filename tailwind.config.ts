import type { Config } from "tailwindcss";

const fontFamilyConfig: any = {}

if(process.env.CUSTOM_SANS_FONT) {
  fontFamilyConfig.sans = process.env.CUSTOM_SANS_FONT
}
if(process.env.CUSTOM_MONO_FONT) {
  fontFamilyConfig.mono = process.env.CUSTOM_MONO_FONT
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: fontFamilyConfig
    },
  },
  plugins: [],
};
export default config;
