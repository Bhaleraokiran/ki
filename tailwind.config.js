/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-contrast": "#fff",
        mediumseagreen: "#6bc785",
        darkslategray: {
          "100": "#454545",
          "200": "#434343",
          "300": "#424242",
          "400": "#224f34",
          "500": "#303030",
        },
        black: "#000",
        seagreen: "#1f8b4a",
        honeydew: "#c2efd4",
        gainsboro: {
          "100": "#e1e1e1",
          "200": "#e0e0e0",
          "300": "#d9d9d9",
          "400": "rgba(226, 226, 226, 0.1)",
        },
        gray: {
          "100": "#8e8e94",
          "200": "#020202",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(0, 0, 0, 0.23)",
          "500": "rgba(255, 255, 255, 0.2)",
        },
        "text-primary": "rgba(0, 0, 0, 0.87)",
        orange: "#f99a0e",
        aliceblue: "#f3f7fb",
        whitesmoke: "#eaeaea",
        saddlebrown: "#99600a",
        peru: "#9e6104",
        slategray: "#576074",
        cornflowerblue: {
          "100": "#4dabff",
          "200": "#1262af",
          "300": "#1262ae",
        },
        lavender: {
          "100": "#cdddec",
          "200": "#ccdcec",
        },
        darkgray: "#999",
        yellowgreen: "#79ca00",
        gold: "#fdbf00",
        sandybrown: "#ff9b53",
        lightgray: "#cecece",
        silver: "#bdbdbd",
        dimgray: "#616161",
        skyblue: "#99d2f5",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        rufina: "Rufina",
        "roboto-slab": "'Roboto Slab'",
        "roboto-serif": "'Roboto Serif'",
        "components-button-large": "Roboto",
        "baloo-bhai": "'Baloo Bhai'",
      },
      borderRadius: {
        "10xs": "3px",
        "4xl-2": "23.2px",
        "5xs-5": "7.5px",
        xs: "12px",
        "28xl-8": "47.8px",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      "11xl": "30px",
      "3xl": "22px",
      "45xl": "64px",
      base: "16px",
      "13xl": "32px",
      mini: "15px",
      xs: "12px",
      "sm-5": "13.5px",
      "xs-2": "11.2px",
      "3xl-4": "22.4px",
      "base-5": "16.5px",
      "4xl-9": "23.9px",
      "9xl-4": "28.4px",
      "2xs-5": "10.5px",
      "mid-9": "17.9px",
      "3xs-7": "9.7px",
      "4xs": "9px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
