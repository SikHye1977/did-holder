const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // Add support for .cjs extension
    sourceExts: ['js', 'json', 'ts', 'tsx', 'cjs'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);