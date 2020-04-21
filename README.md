# serverless-postman-env-plugin

Serverless plugin for creating a postman environment file from http endpoints. After
deploying this plugin can be used to create a postman environment file. The file contains
information about the http api endpoint. This environment file can be used to start
postman tests against the deployed api.

## Installation

Plugin can be installed with:

```npm install serverless-postman-env-plugin```

## Usage

The plugin can be called with:

```serverless postmanenv```

After finish a new file called `postman_environment.json` is in the workspace.

## License

See `LICENSE` file for license information.