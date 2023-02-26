const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        'main':'5%  1% auto 25%'
      }
    },
  },
  plugins: [],
});
