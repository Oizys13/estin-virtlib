import type { Config } from "tailwindcss";

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
      fontSize: {
        '2pt':'2pt',
        '3pt':'3pt',
        '4pt':'4pt',
        '5pt':'5pt',
        '6pt':'6pt',
        '7pt':'7pt',
        '8pt':'8pt',
        '9pt':'9pt',
        '10pt': '10pt',
        '11pt': '11pt',
        '12pt': '12pt',
        '14pt': '14pt',
        '16pt': '16pt',
        '18pt': '18pt',
        '20pt': '20pt',
        '24pt': '24pt',
        '26pt': '26pt',
        '28pt': '28pt',
        '30pt': '30pt',
        '36pt': '36pt',
        '48pt': '48pt',
      },
    },
  },
  plugins: [],
};
export default config;
