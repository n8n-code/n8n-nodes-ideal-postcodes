# @n8n-dev/n8n-nodes-ideal-postcodes

![ideal-postcodes Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-ideal-postcodes.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-ideal-postcodes)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing ideal-postcodes API integrations by hand.**

Every time you connect n8n to ideal-postcodes, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to ideal-postcodes took 5 minutes, not half a day?**

This node gives you **14+ resources** out of the box: **Address Search**, **Place Search**, **UK**, **Emails**, **Keys**, and 9 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-ideal-postcodes
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-ideal-postcodes`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **ideal-postcodes API** → paste your API key
3. Drag the **ideal-postcodes** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Address Search</b> (3 operations)</summary>

- Get Find Address
- Get Resolve Address GBR
- Get Resolve Address USA

</details>

<details>
<summary><b>Place Search</b> (2 operations)</summary>

- Get Find Place
- Get Resolve Place

</details>

<details>
<summary><b>UK</b> (5 operations)</summary>

- Get Extract Addresses
- Post Cleanse
- Get Lookup Postcode
- Get Retrieve by UDPRN
- Get Retrieve by UMPRN

</details>

<details>
<summary><b>Emails</b> (1 operations)</summary>

- Get Email Validation

</details>

<details>
<summary><b>Keys</b> (4 operations)</summary>

- Get Availability
- Get Details
- Get Logs CSV
- Get Usage Stats

</details>

<details>
<summary><b>Licensees</b> (5 operations)</summary>

- Get List
- Post Create
- Delete Cancel
- Get Retrieve
- Put Update

</details>

<details>
<summary><b>Configs</b> (5 operations)</summary>

- Get List
- Post Create
- Delete 
- Get Retrieve
- Post Update

</details>

<details>
<summary><b>Phone Numbers</b> (1 operations)</summary>

- Get Phone Number Validation

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from ideal-postcodes docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official ideal-postcodes OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **ideal-postcodes** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the ideal-postcodes API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
