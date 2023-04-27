import { createSlug } from "../utils/functions.js";

export const menu = {
  name: 'lists',
  message: 'list of menu',
  hint: 'pick your choice',
  numbered: true,
  choices: [
    "exit",
    "setup termux",
    "hacker starter pack",
    "zhell server",
  ].map(choice => ({
    name: createSlug(choice),
    message: choice
  }))
};