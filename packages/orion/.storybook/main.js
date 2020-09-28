module.exports = {
  stories: ['../src/**/*.stories.js', '../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader')
      // options: {
      //   presets: [['module:typescript', { flow: false, typescript: true }]]
      // }
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
  addons: ['@storybook/addon-actions', '@storybook/addon-knobs']
}
