module.exports = {
  propsParser: require("react-docgen-typescript").withDefaultConfig([,]).parse,
  resolver: require("react-docgen").resolver.findAllComponentDefinitions,
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
};
