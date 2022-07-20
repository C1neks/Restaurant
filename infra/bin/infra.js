#!/usr/bin/env node
const { config } = require("dotenv");
const { resolve } = require("path");

const cdk = require("aws-cdk-lib");
const { InfraStack } = require("../lib/infra-stack");
config({ path: resolve(__dirname, "../../backend/.env") });
const app = new cdk.App();
new InfraStack(app, "InfraStack");

