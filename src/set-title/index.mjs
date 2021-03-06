export default (config, ctx) => title => {
  const simpleTitle = typeof title === "string";

  const documentTitle = simpleTitle
    ? title
    : config.documentTitleFormatter(title);

  ctx.state[config.stateNamespace].title = documentTitle;
};
