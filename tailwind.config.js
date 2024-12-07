/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#396C03",
        primaryLight: "#6B9142",
        lightBlack: "#3F3F3F",
        secondary: "#FF8B00",
        paragraph1: "#676767",
        paragraph2: "#838383",
        paragraph3: "#525252",
      },
      fontSize: {
        h1: "65px",
        "size-65": "65px",
        "size-50": "50px",
        "size-18": "18px",
        h3: "40px",
        "size-40": "40px",
        "size-30": "30px",
        h5: "24px",
        h6: "20px",
        "size-20": "20px",
        "size-22": "22px",
        "size-24": "24px",
        paragraph: "18px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins
        merienda: ["Merienda", "serif"], // Add Marienda
      },
    },
  },
  plugins: [],
};
