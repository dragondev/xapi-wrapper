# XboxAPI

An API wrapper for XAPI Service.
[![NPM](https://nodei.co/npm/@shadow/xapi.png)](https://nodei.co/npm/@shadow/xapi/)

# Installing

`npm i @shadow/xapi`

# Usage

```js
const XapiClient = require("@shadow/xapi");
const xapi = new XapiClient();
```

# Example

```js
const XapiClient = require("@shadow/xapi");
const xapi = new XapiClient();

async function find(query) {
  let req = await xapi.gamertag(query);
  return console.log(req);
}
find("2535412670012736");
```

# Functions

- id
- gamertag
- profile
- status
- activity
- friends
