const { spawn } = require("child_process");
const Speaker = require("speaker");
const microtime = require("microtime");
const fs = require('fs');

"cache/librespot".split("/").reduce((path, folder) => {
  path += folder + "/";
  fs.mkdirSync(path);
});

const speakerOptions = {
  channels: 2,
  bitDepth: 16,
  sampleRate: 44100
};
var speaker = new Speaker(speakerOptions);

var librespot = spawn("ext/librespot/librespot", [
  "--cache", "cache/librespot",
  "--name", "neats-test"
]);

librespot.stdout.pipe(process.stdout);

// var timeout = null;
// librespot.stdout.on("data", function(data) {
//   if(timeout !== null) {
//     clearTimeout(timeout);
//   }
//   timeout = setTimeout(function() {
//     speaker.close();
//     speaker = new Speaker(speakerOptions);
//     librespot.stdout.pipe(speaker);
//   }, 500);
// });
// librespot.stdout.pipe(speaker);
