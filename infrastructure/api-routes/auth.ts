import { Api } from '../api';
import { UserPool, UserPoolClient } from '../auth';

Api.route(
  'POST /auth/register',
  {
    link: [UserPool, UserPoolClient],
    handler: 'packages/functions/src/auth.register',
  },
  { auth: false }
);

Api.route(
  'POST /auth/login',
  {
    link: [UserPool, UserPoolClient],
    handler: 'packages/functions/src/auth.login',
  },
  { auth: false }
);

Api.route(
  'POST /auth/refresh',
  {
    link: [UserPool, UserPoolClient],
    handler: 'packages/functions/src/auth.refresh',
  },
  { auth: false }
);
