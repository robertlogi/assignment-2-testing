export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforce camelCase for function names",
    },
    fixable: "code",
  },
  create(context) {
    return {
      FunctionDeclaration(node) {
        const functionName = node.id.name;
        if (!/^([a-z][a-zA-Z0-9]*)$/.test(functionName)) {
          const camelCaseName = functionName.replace(/_([a-zA-Z])/g, (_, c) =>
            c.toUpperCase(),
          );

          context.report({
            node: node.id,
            message: `Function "${functionName}" should be camelCase.`,
            fix: (fixer) => fixer.replaceText(node.id, camelCaseName),
          });
        }
      },
    };
  },
};
