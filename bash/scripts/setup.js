import { shell, print } from "../../utils/functions.js";
import colors from "../../constants/colors.js";

const { warning, white, green } = colors;

print(warning("installing utilities packages"));

shell(`
  pkg install mc -y
  pkg install traceroute -y
  pkg install nmap -y
`);

print(`${white("success installing packages")} ${green("✓")}`);