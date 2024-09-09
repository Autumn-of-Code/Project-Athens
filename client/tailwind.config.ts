import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            screens: {
                lg: "1010px",
                xl: "1200px",
                "2xl": "1450px",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
                "primary-red": "#F12727",
                "text-dark": "#323232",
            },
            fontFamily: {
                jost: "var(--jost)",
                raleway: "var(--raleway)",
                inter: "var(--inter)",
            },
            spacing: {
                "padding-main": "107px",
                "margin-large": "100px",
                "height-section": "280px",
                "width-content": "748px",
            },
            fontSize: {
                "heading-xl": [
                    "48px",
                    { lineHeight: "69.36px", letterSpacing: "0.04em" },
                ],
                "body-lg": [
                    "24px",
                    { lineHeight: "32px", letterSpacing: "0.04em" },
                ],
            },
            lineHeight: {
                "line-tight": "69.36px",
                "line-normal": "32px",
            },
            letterSpacing: {
                wide: "0.04em",
            },
            gap: {
                "small-gap": "10px",
                "medium-gap": "24px",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
