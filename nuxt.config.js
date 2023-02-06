export default {
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
  ],
  plugins: [
    "@/plugins/element-ui.js"
  ],
  build: {
    transpile: [/^element-ui/]
  }
}