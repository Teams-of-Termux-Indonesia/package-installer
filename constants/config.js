import pkg from "../package.json" assert { type: "json" };
import { file_get_contents } from "../utils/functions.js";

const config = {
  name: pkg.name
};

export default config;