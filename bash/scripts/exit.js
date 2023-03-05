import { shell, print } from "../../utils/functions.js";
import colors from "../../constants/colors.js";

const { warning, white, green } = colors;

print(warning("exiting program ..."));

setTimeout(() => {
  print(`${white("done")} ${green("✓")}`);
  setTimeout(() => {
    process.exit();
  }, 500);
}, 1000);