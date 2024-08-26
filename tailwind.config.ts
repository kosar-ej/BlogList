import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#591167',
      'gray-100' : '#c2c2c2',
      'gray-700' : '#94a3b8',
      'gray-500' : '#64748b',
      'black' : '#333',
      'default' : '#ece2fa',
      'danger' : '#dc2626',
    },
  },
  plugins: [],
};
export default config;
