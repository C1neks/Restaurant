const serverlessExpress = require("@vendia/serverless-express");
const { createApp } = require("./createApp.js");

let serverlessExpressInstance;

async function setup(event, context) {
  const app = await createApp();
  console.log(app);
  serverlessExpressInstance = serverlessExpress({ app });
  return serverlessExpressInstance(event, context);
}

function handler(event, context) {
  if (serverlessExpressInstance)
    return serverlessExpressInstance(event, context);

  return setup(event, context);
}

exports.handler = handler;
