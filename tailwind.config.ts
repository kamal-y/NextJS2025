import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        skyy: '#0093D0', 
        pop: '#5CD2DD', 
        beige: '#F9F7F5', 
        pinkish: '#FFF3F9', 
        grayy : '#6B7280',
        mainn :"#3B4347",
        lgray:"#9C9C9C"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Primary font
        playfair: ['Playfair Display', 'serif'], // Secondary font
        poppins:['Poppins','sans-serif'],
        space : ["Space Grotesk", "sans-serif"]
      },
      fontSize: {
        'custom-xs': '0.625rem',   // 10px
        'custom-sm': '0.875rem',    // 14px
        'custom-lg': '1.375rem',    // 22px
        'custom-xl': '2.25rem',     // 36px
        'custom-2xl': '3rem',       // 48px
      },
    },
  },
  plugins: [],
} satisfies Config;
