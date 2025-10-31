const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// make sure resolver fields exist before modifying
config.resolver = config.resolver || {};
config.resolver.assetExts = config.resolver.assetExts || [];
config.resolver.sourceExts = config.resolver.sourceExts || [];

// remove svg from assetExts and add to sourceExts so svg files are transformed
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts = Array.from(new Set([...config.resolver.sourceExts, 'svg']));

// use react-native-svg-transformer for .svg imports
config.transformer = config.transformer || {};
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

module.exports = config;