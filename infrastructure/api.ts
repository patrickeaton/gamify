import { UserPool, UserPoolClient } from './auth';

export const Api = new sst.aws.ApiGatewayV2('ApiGateway', {});

export const jwt = Api.addAuthorizer({
  name: 'jwt',
  jwt: {
    audiences: [UserPoolClient.id],
    issuer: $interpolate`https://cognito-idp.${
      aws.getArnOutput(UserPool).region
    }.amazonaws.com/${UserPool.id}`,
    ttl: '24 hours',
  },
});

export * from './api-routes';
