import { shell, print } from "../../utils/functions.js";
import colors from "../../constants/colors.js";

const { warning, white, green } = colors;

/* ===== scripts ==== */
const repository = "https://github.com/ryugenxd/ZhellServer";
const { pathname } = new URL(repository);
const project_folder = pathname.split("/").pop();

print(warning("installing packages for hacking"));

shell(`
  apt update -y
  apt upgrade -y
  git clone ${ repository }
  cd ${ project_folder }
  chmod 777 ./install
  ./install
`);

print(`${white("success installing packages")} ${green("✓")}`);