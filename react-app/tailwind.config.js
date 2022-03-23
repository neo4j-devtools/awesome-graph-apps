module.exports = {
  // This is the only line you need to include as a preset
  presets: [require('@neo4j-ndl/base/lib/optimised.config')],
  // By default this configuration will have a prefix "n-"
  // for all utility classes. If you want to remove it you can
  // do with an empty string as a prefix, which is convinient
  // for existing tailwind projects
  prefix: '',
  // ... rest of your Tailwind configuration
  content: ["./src/**/*.{html,jsx,tsx,js,ts}"],
  corePlugins: {
    preflight: false,
  }
};