module.exports = {
  name: 'recipes',
  exposes: {
    './Routes': 'apps/recipes/src/app/remote-entry/entry.routes.ts',
  },
};
