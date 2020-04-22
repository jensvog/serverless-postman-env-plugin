'use strict';

var fs = require('fs');
const { v4: uuidv4 } = require('uuid');

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.provider = this.serverless.getProvider('aws');

    this.commands = {
      postmanenv: {
        usage: 'Creates a postman environment file from http endpoints',
        lifecycleEvents: ['create'],
        options: {
        },
      },
    };

    this.hooks = {
      'postmanenv:create': this.createPostmanEnv.bind(this)
    };
  }

  createPostmanEnv() {
    this.serverless.cli.log('Create Postman environment file');

    const stackName = this.provider.naming.getStackName(this.options.stage);

    this.provider.request('CloudFormation', 'describeStacks', { StackName: stackName }, this.options.stage, this.options.region)
    .then(response => {
      const endpoint = response.Stacks[0].Outputs
      .find(service => service.OutputKey === 'ServiceEndpoint')
      .OutputValue;

      var postmanenv = {
        id: uuidv4(),
        name: stackName,
        values: [
          {
            key: 'apiurl',
            value: endpoint,
            enabled: true
          }
        ]
      }

      fs.writeFileSync('./postman_environment.json', JSON.stringify(postmanenv, null, 2));
      this.serverless.cli.log('Created postman_environment.json');
    });
  }
}

module.exports = ServerlessPlugin;
