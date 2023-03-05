import { shell, print } from "../../utils/functions.js";
import colors from "../../constants/colors.js";

const { warning, white, green } = colors;

/* ===== scripts ==== */
const sqlmap = "pkg update -y && pkg upgrade -y && pkg install python2 git -y && cd ../ && git clone https://github.com/sqlmapproject/sqlmap && cd sqlmap && chmod +x sqlmap.py && python2 sqlmap.py";

print(warning("installing packages for hacking"));

shell(`
  pkg install metasploit -y
  ${ sqlmap }
`);

print(`${white("success installing packages")} ${green("✓")}`);