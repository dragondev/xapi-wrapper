const { XapiClient } = require("./index");
const xapi = new XapiClient();

async function tests(username, id) {
  console.log("Testing ID endpoint");
  console.log(await xapi.id(username));
  console.log("Testing Gamertag endpoint");
  console.log(await xapi.gamertag(id));
  console.log("Testing Profile endpoint");
  console.log(await xapi.profile(id));
  console.log("Testing presence endpoint");
  console.log(await xapi.status(id));
  console.log("Testing activity endpoint");
  console.log(await xapi.activity(id));
  console.log("Testing recent activity endpoint");
  console.log(await xapi.activity(id, true));
  console.log("Testing friends endpoint");
  console.log(await xapi.friends(id));
}
tests("UltimateDoug", "2535473494404090");
