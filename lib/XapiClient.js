const req = require("centra");
const BASE_URL = "https://xapi.proxied.cloud";

class XapiClient {
  async id(query) {
    if (!query) throw new Error("Please input a Gamertag");
    let id = await req(BASE_URL).path("id").path(query).send();
    if (id.statusCode !== 200) return id.text();
    return id.text();
  }
  async gamertag(query) {
    if (!query) throw new Error("No XUID entered");
    let gamertag = await req(BASE_URL).path("gamertag").path(query).send();
    if (gamertag.statusCode !== 200) return gamertag.text();
    return gamertag.text();
  }
  async profile(query) {
    let profile = await req(BASE_URL).path("profile").path(query).send();
    if (profile.statusCode !== 200) return profile.text();
    profile = profile.text();
    return profile;
  }
  async gamercard(query) {
    if (!query) throw new Error("No XUID entered");
    let gamercard = await req(BASE_URL).path("gamercard").path(query).send();
    if (gamercard.statusCode !== 200) return gamercard.text();
    gamercard = gamercard.text();
    return gamercard;
  }

  async status(query) {
    if (!query) throw new Error("No XUID entered");
    let presence = await req(BASE_URL).path("status").path(query).send();
    if (presence.statusCode !== 200) return presence.text();
    presence = presence.text();
    return presence;
  }
  async activity(query, recent) {
    if (recent === true) return this.activity_recent(query);
    if (!query) throw new Error("No XUID entered");
    let activity = await req(BASE_URL).path("activity").path(query).send();
    if (activity.statusCode !== 200) return activity.text();
    activity = activity.text();
    return activity;
  }
  async activity_recent(query) {
    if (!query) throw new Error("No XUID entered");
    let activity = await req(BASE_URL)
      .path("activity")
      .query("recent", true)
      .path(query)
      .send();
    if (activity.statusCode !== 200) return activity.text();
    activity = activity.text();
    return activity;
  }
  async friends(query) {
    if (!query) throw new Error("No XUID entered");
    let friends = await req(BASE_URL).path("friends").path(query).send();
    if (friends.statusCode !== 200) return friends.text();
    friends = friends.text();
    return friends;
  }
}
module.exports = XapiClient;
