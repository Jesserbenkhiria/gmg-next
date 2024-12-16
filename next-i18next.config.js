const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "fr", "de","es"], // Add your supported locales here
    defaultLocale: "en",
  },
  localePath: path.resolve("./public/locales"), // Ensure your translation files are in 'public/locales'
};