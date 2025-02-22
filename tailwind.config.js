/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // tailwind.config.js
  theme: {
    extend: {
      colors: {
        // Primary Colors
        '--primary-color': '#bc393c',    // mojo
        '--primary-dark': '#981c1d',      // old-brick
        '--primary-light': '#cea1a1',     // eunry
        
        // Secondary Colors
        '--secondary-color': '#a05e5d',   // au-chico
        '--secondary-dark': '#8a3939',    // sanguine-brown
        '--secondary-light': '#ad7c74',   // coral-tree
        
        // Accent Colors
        '--accent-color': '#cc6c70',      // contessa
        '--accent-dark': '#99434d',       // copper-rust
        '--accent-light': '#ae747c',      // turkish-rose
        
        // Neutral Colors
        '--text-color': '#2d1e1f',        // Custom dark red-brown
        '--text-muted': '#5a3a3a',        // Custom muted red
        '--border-color': '#a05e5d',      // au-chico
        
        // Background Colors
        '--section-bg': '#f5eaea',        // Light pinkish background
        '--footer-bg': '#702d2b',         // spice
        '--input-bg': '#f0e0df',          // Light pink input background
        
        // Special Colors
        '--highlight-color': '#bc393c'    // mojo
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'page': '#f5eaea' // Main page background
      }),
      textColor: theme => ({
        ...theme('colors'),
      }),
      }
},
  plugins: [],
};
