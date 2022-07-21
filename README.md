
## Development

Installation:

Backend dependencies:

```shell
npm install .\backend\
```
Frontend dependencies:
```shell
npm install .\frontend\
```

Main dependencies:

```shell
npm install
```
Local MongoDB:

```shell
npm run local-mongodb
```

Connect to your MongoDB instance on  [mongodb://localhost:27017](mongodb://localhost:27017)

Start the development server:

```shell
npm start
```
Server will start on [http://localhost:3000](http://localhost:3000)



## Deployment

Push to **master** branch:

- `cdk-deploy` - That job  will checkout code, configure AWS Credentials, install all dependencies and run deploy
