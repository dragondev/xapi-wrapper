const req = require("centra");
const BASE_URL = "https://xapi.proxied.cloud";

class XapiClient {
    checkJSON(str) {
    try {
      if (!str) throw new Error('Please input a JSON object');
      const parse = JSON.parse(str);
      if (parse) return true;
      return false;
    } catch (e) {
      return false;
    }
  }

  formatError(err) {
    if (this.checkJSON(err)) return JSON.parse(err);
    if (err.toString().startsWith('<!DOCTYPE html>')) return 'Html page error given';
    return err.toString();
  }

  async id(query) {
    if (!query) throw new Error("Please input a Gamertag");
    let id = await req(BASE_URL).path("id").path(query).send();
    if (id.statusCode !== 200) return this.formatError(id.body);
    return id.text();
  }
  async gamertag(query) {
    if (!query) throw new Error("No XUID entered");
    let gamertag = await req(BASE_URL).path("gamertag").path(query).send();
    if (gamertag.statusCode !== 200) return this.formatError(gamertag.body);
    return gamertag.text();
  }
  async profile(query) {
    let profile = await req(BASE_URL).path("profile").path(query).send();
    if (profile.statusCode !== 200) return this.formatError(profile.body);
    return profile.json();
  }
  async gamercard(query) {
    if (!query) throw new Error("No XUID entered");
    let gamercard = await req(BASE_URL).path("gamercard").path(query).send();
    if (gamercard.statusCode !== 200) return this.formatError(gamercard.body);
    return gamercard.json();
  }

  async status(query) {
    if (!query) throw new Error("No XUID entered");
    let presence = await req(BASE_URL).path("status").path(query).send();
    if (presence.statusCode !== 200) return this.formatError(presence.body);
    return presence.json();
  }
  async activity(query, recent) {
    if (recent === true) return this.activity_recent(query);
    if (!query) throw new Error("No XUID entered");
    let activity = await req(BASE_URL).path("activity").path(query).send();
    if (activity.statusCode !== 200) return this.formatError(activity.body);
    return activity.json();
  }
  async activity_recent(query) {
    if (!query) throw new Error("No XUID entered");
    let activity = await req(BASE_URL)
      .path("activity")
      .query("recent", true)
      .path(query)
      .send();
    if (activity.statusCode !== 200) return this.formatError(activity.body);
    return activity.json();
  }
  async friends(query) {
    if (!query) throw new Error("No XUID entered");
    let friends = await req(BASE_URL).path("friends").path(query).send();
    if (friends.statusCode !== 200) return this.formatError(friends.body);
    return friends.json();
  }
}
module.exports = XapiClient;
