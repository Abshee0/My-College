/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f7ff',
        'neon-purple': '#bc13fe',
        'neon-pink': '#ff36ab',
        'dark-blue': '#0f0f1a',
        'space-blue': '#1a1a2e',
        'cyber-black': '#121212',
      },
      fontFamily: {
        future: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px var(--neon-blue), 0 0 20px var(--neon-purple)',
        'neon-hover': '0 0 15px var(--neon-blue), 0 0 30px var(--neon-purple)',
      },
      animation: {
        'float': 'floating 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 247, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 247, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'cyber-grid': '20px 20px',
      },
    },
  },
  plugins: [],
};