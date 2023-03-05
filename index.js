import path from "path";

import config from "./constants/config.js";
import App from "./cores/App.js";

const globals = {
  pwd: path.resolve("./")
};

for (let key in globals) {
  global[key] = globals[key];
}

const app = new App(config);
app.start();