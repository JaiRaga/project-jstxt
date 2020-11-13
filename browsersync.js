const bs = require("browser-sync").create();

bs.init({
  port: 5002,
  ui: 5003,
  proxy: "localhost:8000",
  files: "./public/*",
  ignore: ["node_modules"],
  reloadDelay: 1000,
  injectChanges: true,
  tunnel: "gggg"
});

bs.reload();
// bs.reload(["index.html", "styles.css", "script.js"]);
