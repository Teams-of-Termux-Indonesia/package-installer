import enquirer from "enquirer";
import path from "path";

import { banner, shell } from "../utils/functions.js";
import { menu } from "../constants/questions.js";
import config from "../constants/config.js";

const { Select } = enquirer;

export default class App {
  constructor ({ name }) {
    this.name = name;
  }
  
  async menu () {
    const choice = await new Select(menu).run();
    switch (choice) {
      case "exit":
          shell(`
            clear
            node ${ path.join(global.pwd, "./bash/scripts/exit.js") }
          `);
        break;
      case "setup-termux":
          shell(`
            clear
            node ${ path.join(global.pwd, "./bash/scripts/setup.js") }
          `);
        break;
      case "hacker-starter-pack":
          shell(`
            clear
            node ${ path.join(global.pwd, "./bash/scripts/hackpack.js") }
          `);
        break;
        
    }
  }
  
  start () {
    banner(this.name);
    this.menu();
  }
}