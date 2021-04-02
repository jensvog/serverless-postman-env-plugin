# serverless-postman-env-plugin

Serverless plugin for creating a postman environment file from http endpoints. After
deploying this plugin can be used to create a postman environment file. The file contains
information about the http api endpoint. This environment file can be used to start
postman tests against the deployed api.

Beside the endpoint url information, also all related API Keys of the endpoint are
printed in the file. This makes it possible to test protected APIs.

## Installation

Plugin can be installed with:

```npm install serverless-postman-env-plugin```

## Usage

The plugin can be called with:

```serverless postmanenv```

After finish a new file called `postman_environment.json` is in the workspace.

## Example output

An example `postman_environment.json` file can look like this:

```json
{
  "id": "<guid>",
  "name": "<api-name>",
  "values": [
    {
      "key": "apiKey<api-name>",
      "value": "<api-key>",
      "enabled": true
    },
    {
      "key": "apiurl",
      "value": "https://xxxx.execute-api.eu-central-1.amazonaws.com/dev",
      "enabled": true
    }
  ]
}
```

## License

See `LICENSE` file for license information.