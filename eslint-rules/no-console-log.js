export default {
  meta: {
    type: "problem",
    docs: {
      description: "Forbid usage of console.log",
    },
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (node.object.name === "console" && node.property.name === "log") {
          context.report({
            node,
            message: "Using console.log is forbidden.",
          });
        }
      },
    };
  },
};
