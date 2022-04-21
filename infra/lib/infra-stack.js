const { Stack, Duration } = require("aws-cdk-lib");
const { Bucket } = require("aws-cdk-lib/aws-s3");
const sqs = require("aws-cdk-lib/aws-sqs");
const lambda = require("aws-cdk-lib/aws-lambda-nodejs");
const gateway = require("aws-cdk-lib/aws-apigateway");

class InfraStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    new Bucket(this, "myImageBucket", {
      bucketName: "resturant.image.bucket",
    });
    const restaurantApiLambda = new lambda.NodejsFunction(this, "api", {
      depsLockFilePath: __dirname + "/../../Backend/package-lock.json",
      entry: __dirname + "/../../Backend/lambda.js",

      environment: {
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
      },
      bundling: {
        minify: true,
      },

      memorySize: 512,
    });

    const api = new gateway.LambdaRestApi(this, `${id}__restaurantGateway`, {
      handler: restaurantApiLambda,
    });
    console.log(api.restApiName);
  }
}

module.exports = { InfraStack };
