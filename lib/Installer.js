import { check_package, shell } from "../utils/functions.js";

export default class Installer {
  static check (pkgs) {
    if (!Array.isArray(pkgs) && typeof pkgs !== "string") throw new Error ("parameter must be Array or String instead!");
    
    return new Promise((resolve, reject) => {
      try {
        if (Array.isArray(pkgs)) pkgs.map((pkg) => Installer.install(pkg));
        else Installer.install(pkgs);
        resolve();
      } catch (e) {
        reject();
      }
    });
  }
  
  static install (pkg) {
    if (typeof pkg !== "string") throw new Error("parameter must be a string!");
    
    try {
     if (!check_package(pkg)) shell(`pkg install ${ pkg } -y`);
    } catch (e) {}
  }
}