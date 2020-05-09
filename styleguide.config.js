const glob = require("glob");
const path = require("path");

module.exports = {
  propsParser: require("react-docgen-typescript").withDefaultConfig([,]).parse,

  //   propsParser: require("react-docgen-typescript").withCustomConfig(
  //     "./tsconfig.json",
  //     []
  //   ).parse,
  //   assetsDir: "./public",
  resolver: require("react-docgen").resolver.findAllComponentDefinitions,
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,

  //   components: "src/components/**/*.tsx",
  components: "src/components/**/[A-Z]*.{ts,tsx}",
  //   title: "React Style Guide Example",
  //   components: function () {
  //     return glob
  //       .sync(path.resolve(__dirname, "src/components/**/*.tsx"))
  //       .filter(function (module) {
  //         return /\/[A-Z]\w*\.tsx$/.test(module);
  //       });
  //   },
};
