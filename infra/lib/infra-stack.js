const { Stack, Duration } = require("aws-cdk-lib");
// const sqs = require('aws-cdk-lib/aws-sqs');
const lambda = require("aws-cdk-lib/aws-lambda-nodejs");
const gateway = require("aws-cdk-lib/aws-apigateway");

class InfraStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const restaurantApiLambda = new lambda.NodejsFunction(this, "api", {
      entry: `${__dirname}/../../Backend/lambda.js`,

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
