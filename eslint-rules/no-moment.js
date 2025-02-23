export default {
    meta: {
      type: 'problem',
      docs: {
        description: 'Forbid usage of moment library',
      },
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          if (node.source.value === 'moment') {
            context.report({
              node,
              message: 'Using moment library is forbidden.',
            });
          }
        },
        CallExpression(node) {
          if (node.callee.name === 'require' && node.arguments[0]?.value === 'moment') {
            context.report({
              node,
              message: 'Using moment library is forbidden.',
            });
          }
        },
      };
    },
  };
  