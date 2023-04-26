import cfonts from "cfonts";
import execute from "exec-sh";
import { spawnSync } from "child_process";
import File from "../lib/File.js";

export const banner = async (text) => {
  cfonts.say(text, {
    font: 'block',              // define the font face
  	align: "center",            // define text alignment
  	colors: ['system'],         // define all colors
  	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
  	letterSpacing: 1,           // define letter spacing
  	lineHeight: 1,              // define the line height
  	space: true,                // define if the output text should have empty lines on top and on the bottom
  	maxLength: '0',             // define how many character can be on one line
  	gradient: false,            // define your two gradient colors
  	independentGradient: false, // define if you want to recalculate the gradient for each new line
  	transitionGradient: false,  // define if this is a transition between colors directly
  	env: 'node'
  });
};


export const file_get_contents = (pathfile) => {
  File.file_get_contents(pathfile);
};


export const createSlug = (text) => {
  text.replace(/(\'|\"|\`|\W)/, "");
  return text.toLowerCase().split(" ").join("-");
};

export const shell = (text) => {
  text.split("\n").map(command => execute(command));
};

export const print = (any, type = "log") => {
  if (!Object.keys(console).includes(type)) throw (`type ${ type } is not defined, try another type (${ Object.keys(console).join(" | ") })`);
  console[type](any);
};


export const check_package = (package_name) => {
  return typeof spawnSync(package_name).pid === "number" ? true : false;
};