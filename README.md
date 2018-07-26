# RESTful Web APIs with Node.js, Express, MongoDB and TypeScript

This is a work in progress

This works over https - so, either get you certificate, or for development purposes just ignore the browser warning and proceed

The default URL is: *http://localhost:3000*

Currently this is the mapping:

+/         - get list of contacts
+/register - register name and email and send verification email (use valid email account in crmController.ts)
+/verify   - work in progress (get the id from req and compare it with db copy, foundby username)
+/update   - work in progress (check if user is verified - verifiedEmail is not blank)



## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

## Clone this repository

```
git clone https://github.com/blin-1/rest-api-node-typescript
```

Then install the dependencies

```
npm install
```

## Start the server

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm run prod
```

## Testing over HTTP (tag [v1.0.0](https://github.com/dalenguyen/rest-api-node-typescript/tree/v1.0.0))

The default URL is: *http://localhost:3000*

+ GET all contacts

```
Send GET request to http://localhost:3000/contact/
```

## Testing over HTTPs (tag [v2.0.0](https://github.com/dalenguyen/rest-api-node-typescript/tree/v1.0.0))

The default URL is: *https://localhost:3000*

The key and cert in the config folder is for testing purpose only. You should generate your own.

*Reference from [Lynda.com](https://www.lynda.com/Node-js-tutorials/Next-steps/633869/671263-4.html)*