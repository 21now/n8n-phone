// This is just to allow render to start the app
const { exec } = require("child_process");

exec("n8n", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});