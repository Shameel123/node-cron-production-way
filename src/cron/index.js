const cron = require("node-cron");
const creatingBackup = require("./jobs/creatingBackup");
const sendEmail = require("./jobs/sendEmail");

function cronJobs() {
  console.log("Initiating Cron Jobs...");
  cron.schedule("* * * * *", () => {
    creatingBackup();
  });

  cron.schedule("*/10 * * * * *", () => {
    sendEmail();
  });
}

module.exports = cronJobs;
