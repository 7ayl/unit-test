import { sync as globSync } from 'glob';
import fs from "fs/promises"
import { build } from 'esbuild'

const files = globSync("*.spec.js");
for (const file of files) {
  fs.readFile(file, "utf-8")
  .then((fileContent) => {
    runModule(fileContent + ";import {run} from './core.js'; run()")
      .then((result) => {
        // console.log(result.outputFiles[0].text);
        // console.log(result);
        new Function(result.outputFiles[0].text)()
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });

}

// fs.readFile("first.spec.js", "utf-8")
//   .then((fileContent) => {
//     runModule(fileContent)
//       .then((result) => {
//         // console.log(result.outputFiles[0].text);
//         // console.log(result);
//         new Function(result.outputFiles[0].text)()
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

function runModule(fileContent) {
  return build({
    stdin: {
      contents: fileContent,
      resolveDir: process.cwd(),
    },
    write: false,
    bundle: true,
    target: "esnext",
    platform: 'node' 
  });
}
