/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  darkMode: ["class"],
  extend: {
    colors: {
      background: {
        primary: 'hsl(var(--background-primary))',
        secondary: 'hsl(var(--background-secondary))',
        warning: 'hsl(var(--background-warning))',
        danger: 'hsl(var(--background-danger))',
      },
      foreground: {
        primary: 'hsl(var(--foreground-primary))',
        secondary: 'hsl(var(--foreground-secondary))',
        warning: 'hsl(var(--foreground-warning))',
        danger: 'hsl(var(--foreground-danger))',
      },
      border: {
        primary: 'hsl(var(--border-primary))',
        secondary: 'hsl(var(--border-secondary))',
        warning: 'hsl(var(--border-warning))',
        danger: 'hsl(var(--border-danger))',
      },
      button: {
        background: {
          primary: 'hsl(var(--button-background-primary))',
          secondary: 'hsl(var(--button-background-secondary))',
          warning: 'hsl(var(--button-background-warning))',
          danger: 'hsl(var(--button-background-danger))',
        },
        foreground: {
          primary: 'hsl(var(--button-foreground-primary))',
          secondary: 'hsl(var(--button-foreground-secondary))',
          warning: 'hsl(var(--button-foreground-warning))',
          danger: 'hsl(var(--button-foreground-danger))',
        }
      },
      input: {
        background: {
          primary: 'hsl(var(--input-background-primary))',
          secondary: 'hsl(var(--input-background-secondary))',
          warning: 'hsl(var(--input-background-warning))',
          danger: 'hsl(var(--input-background-danger))',
        },
        placeholder: {
          primary: 'hsl(var(--input-placeholder-primary))',
          secondary: 'hsl(var(--input-placeholder-secondary))',
          warning: 'hsl(var(--input-placeholder-warning))',
          danger: 'hsl(var(--input-placeholder-danger))',
        },
        foreground: {
          primary: 'hsl(var(--input-foreground-primary))',
          secondary: 'hsl(var(--input-foreground-secondary))',
          warning: 'hsl(var(--input-foreground-warning))',
          danger: 'hsl(var(--input-foreground-danger))',
        }
      },
      card: {
        background: {
          primary: 'hsl(var(--card-background-primary))',
          secondary: 'hsl(var(--card-background-secondary))',
          warning: 'hsl(var(--card-background-warning))',
          danger: 'hsl(var(--card-background-danger))',
        },
        foreground: {
          primary: 'hsl(var(--card-foreground-primary))',
          secondary: 'hsl(var(--card-foreground-secondary))',
          warning: 'hsl(var(--card-foreground-warning))',
          danger: 'hsl(var(--card-foreground-danger))',
        }
      }
    },
    keyframes: {
      slideFromRight: {
        "0%": { transform: "translateX(100%)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      slideFromLeft: {
        "0%": { transform: "translateX(-100%)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      slideFromTop: {
        "0%": { transform: "translateY(-100%)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
      slideFromBottom: {
        "0%": { transform: "translateY(100%)", opacity: 0 },
        "100%": { transform: "translateY(0)", opacity: 1 },
      },
    },
    animation: {
      slideFromRight: "slideFromRight 0.5s ease-out forwards",
      slideFromLeft: "slideFromLeft 0.5s ease-out forwards",
      slideFromTop: "slideFromTop 0.5s ease-out forwards",
      slideFromBottom: "slideFromBottom 0.5s ease-out forwards",
    },
  },
};
export const plugins = [require("tailwind-scrollbar")];
