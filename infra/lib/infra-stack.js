const { Stack, Duration } = require("aws-cdk-lib");

const S3 = require("aws-cdk-lib/aws-s3");

const lambda = require("aws-cdk-lib/aws-lambda-nodejs");
const gateway = require("aws-cdk-lib/aws-apigateway");
const { SPADeploy } = require("cdk-spa-deploy");

class InfraStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const restaurantApiLambda = new lambda.NodejsFunction(this, "api", {
      depsLockFilePath: __dirname + "/../../backend/package-lock.json",
      entry: __dirname + "/../../backend/lambda.js",

      environment: {
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
        MONGODB_URL: process.env.MONGODB_URL,
      },
      bundling: {
        minify: true,
      },

      memorySize: 512,
    });

    const api = new gateway.LambdaRestApi(this, `${id}__restaurantGateway`, {
      handler: restaurantApiLambda,
      binaryMediaTypes: [
        "image/jpg",
        "multipart/form-data",
        "application/octet-stream",
      ],
    });
    console.log(api.restApiName);
    new SPADeploy(this, "my-restaurant-app").createSiteWithCloudfront({
      indexDoc: "index.html",
      websiteFolder: "../../Restaurant/frontend/build",
    });
  }
}

module.exports = { InfraStack };
