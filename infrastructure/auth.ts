// const GoogleClientId = new sst.Secret("GOOGLE_CLIENT_ID");
// const GoogleClientSecret = new sst.Secret("GOOGLE_CLIENT_SECRET");

export const UserPool = new sst.aws.CognitoUserPool('AuthUserPool', {
  // aliases: [
  //   'email'
  // ],
  // triggers: {
  //   preTokenGeneration: {
  //     handler: 'packages/functions/src/auth.generateJwtAttributes',
  //   }
  // }
});

// UserPool.addIdentityProvider('AuthUserPoolGoogleProvider', {
//     type: "google",
//     details: {
//       authorize_scopes: "email profile",
//       client_id: GoogleClientId.value,
//       client_secret: GoogleClientSecret.value,
//     },
//     attributes: {
//       email: "email",
//       name: "name",
//       username: "sub",
//     },
//   });

export const UserPoolClient = UserPool.addClient('AuthUserPoolClient', {
  transform: {
    client: {
      allowedOauthFlowsUserPoolClient: true,
      allowedOauthFlows: ['code'],
      allowedOauthScopes: ['email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
      explicitAuthFlows: ['ALLOW_ADMIN_USER_PASSWORD_AUTH', 'ALLOW_USER_SRP_AUTH', 'ALLOW_REFRESH_TOKEN_AUTH', 'ALLOW_CUSTOM_AUTH'],
    }
  }
});

export const IdentityPool = new sst.aws.CognitoIdentityPool('AuthIdentityPool', {
  userPools: [
    {
      userPool: UserPool.id,
      client: UserPoolClient.id,
    },
  ],
});