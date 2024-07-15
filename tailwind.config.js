/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "cold-grey-white": "#fff",
        "cold-grey-80": "#37383c",
        main: "#ff7757",
        whitesmoke: "#f1f1f1",
        dimgray: "#5a5a5a",
        color: "#fbfbfb",
        button: "#d9d9d9",
        "gray-1": "#333",
        text: "#1c1c1c",
        ghostwhite: "#f6f5ff",
        lightgray: "#dbcaca",
        hitbox: "rgba(255, 255, 255, 0)",
        "theme-primary": "#0d6efd",
        "components-list-group-border": "rgba(0, 0, 0, 0.13)",
        "gray-900": "#212529",
        "gray-600": "#6c757d",
        darkgray: "#9d9d9d",
        salmon: "rgba(255, 118, 109, 0.25)",
        slategray: "#767e86",
        main1: "#ff766d",
        firebrick: {
          "100": "#cc423b",
          "200": "#cc4524",
        },
        midnightblue: "#2e0c5a",
        gray1: {
          "100": "#919191",
          "200": "#8e8b8b",
          "300": "#787878",
          "400": "rgba(145, 145, 145, 0.09)",
        },
        "color-base-text-dark": "#545454",
        "color-background-bg-2": "#c2b7ee",
        "color-brand-main": "#533fac",
        "color-base-dark": "#1d1d1d",
        "color-base-text-light": "#a7a7a7",
        "color-background-bg-1": "#f4f1ff",
        slateblue: "#7a66d4",
      },
      spacing: {
        boundvariablesdata: "14px",
        boundvariablesdata2: "8px",
        "font-size-2xl": "60px",
        "breaks-text-break": "24px",
        "breaks-section-padding": "80px",
        boundvariablesdata3: "16px",
        boundvariablesdata4: "30px",
        boundvariablesdata5: "24px",
        boundvariablesdata6: "18px",
      },
      fontFamily: {
        roboto: "Roboto",
        sub: "Poppins",
        inter: "Inter",
        "body-regular": "'Helvetica Neue'",
        "desktop-h4": "Gotham",
        "text-base": "Montserrat",
      },
      borderRadius: {
        "13xl": "32px",
        "8xs": "5px",
        boundvariablesdata1: "4px",
        "padding-xs": "4px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      lg: "18px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "5xl": "24px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "21xl": "40px",
      "41xl": "60px",
      "17xl": "36px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1900: {
        raw: "screen and (max-width: 1900px)",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};