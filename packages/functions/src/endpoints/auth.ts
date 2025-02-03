import {
  AuthLoginValidator,
  AuthRegisterValidator,
} from '@gamify/core/entities';
import { ApiWrapper } from '@gamify/core/helpers';
import {
  AdminCreateUserCommand,
  AdminSetUserPasswordCommand,
  CognitoIdentityProviderClient,
  AdminInitiateAuthCommand,
  PreTokenGenerationLambdaVersionType,
} from '@aws-sdk/client-cognito-identity-provider';
import { Resource } from 'sst';
import * as crypto from 'crypto';
import { PreTokenGenerationTriggerEvent, PreTokenGenerationV2TriggerEvent } from 'aws-lambda';

const CognitoClient = new CognitoIdentityProviderClient();

// Inject more information into the Identity Token
export const generateJwtAttributes = (event: PreTokenGenerationTriggerEvent) => {
  // event.response = {
  //   claimsOverrideDetails: {
  //     claimsToAddOrOverride: {
  //       my_first_attribute: 'first_value',
  //       my_second_attribute: 'second_value',
  //       // permissions: ['*', 'read:contacts'],
  //     },
  //     claimsToSuppress: ['email'],
  //   },
  // };

  // console.log(event);
  return event;
};

export const register = ApiWrapper(async evt => {
  const body = JSON.parse(evt?.body ?? '{}');
  const parsedBody = AuthRegisterValidator.parse(body);

  // Cognito is weird... it requires a temporary password to be set and then a second call to set the password.
  await CognitoClient.send(
    new AdminCreateUserCommand({
      DesiredDeliveryMediums: ['EMAIL'],
      MessageAction: 'SUPPRESS',
      UserAttributes: [
        {
          Name: 'name',
          Value: parsedBody.name,
        },
        {
          Name: 'email',
          Value: parsedBody.email,
        },
        {
          Name: 'email_verified',
          Value: 'true',
        },
      ],
      UserPoolId: Resource.AuthUserPool.id,
      Username: parsedBody.email,
    })
  );

  // Now that the user is created, set the password
  await CognitoClient.send(
    new AdminSetUserPasswordCommand({
      UserPoolId: Resource.AuthUserPool.id,
      Username: parsedBody.username || parsedBody.email,
      Password: parsedBody.password,
      Permanent: true,
    })
  );

  const res = await CognitoClient.send(
    new AdminInitiateAuthCommand({
      AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
      ClientId: Resource.AuthUserPoolClient.id,
      UserPoolId: Resource.AuthUserPool.id,
      AuthParameters: {
        USERNAME: parsedBody.username || parsedBody.email,
        PASSWORD: parsedBody.password,
      },
    })
  );

  return res?.AuthenticationResult;
});

export const login = ApiWrapper(async evt => {
  const body = JSON.parse(evt?.body ?? '{}');
  const parsedBody = AuthLoginValidator.parse(body);

  const res = await CognitoClient.send(
    new AdminInitiateAuthCommand({
      AuthFlow: 'ADMIN_USER_PASSWORD_AUTH',
      ClientId: Resource.AuthUserPoolClient.id,
      UserPoolId: Resource.AuthUserPool.id,
      AuthParameters: {
        USERNAME: parsedBody.username,
        PASSWORD: parsedBody.password,
      },
    })
  );

  return res?.AuthenticationResult;
});

export const refresh = ApiWrapper(async evt => {
  const body = JSON.parse(evt?.body ?? '{}');

  const res = await CognitoClient.send(
    new AdminInitiateAuthCommand({
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      ClientId: Resource.AuthUserPoolClient.id,
      UserPoolId: Resource.AuthUserPool.id,
      AuthParameters: {
        REFRESH_TOKEN: body.refreshToken,
      },
    })
  );

  return res?.AuthenticationResult;
});
