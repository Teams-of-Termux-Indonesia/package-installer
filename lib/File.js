import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FileHandler {
  constructor (content) {
    this.content = content;
  }
  
  json () {
    const { content } = this;
    
    try {
      return JSON.parse(content);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

export default class File {
  static file_get_contents (dest) {
    let file = path.join(dest);
    const content = fs.readFileSync(file, "utf8");
    return new FileHandler(content);
  }
}