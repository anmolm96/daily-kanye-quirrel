import { CronJob } from "quirrel/next";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

export default CronJob(
  "api/sms", // 👈 the route that it's reachable on
  "0 9 * * *",
  async () => {
    const resp = await fetch("https://api.kanye.rest");
    const { quote } = await resp.json();
    client.messages
      .create({
        body: `${quote} - Kanye West`,
        messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE,
        to: process.env.USER_PHONE_NUMBER,
      })
      .then((message) => console.log(message.sid))
      .done();
  }
);
