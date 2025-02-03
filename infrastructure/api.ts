import { Bucket } from './storage';
import { ContactsTable } from './database';
import { UserPool, UserPoolClient } from './auth';

export const Api = new sst.aws.ApiGatewayV2('ApiGateway', {});

const jwt = Api.addAuthorizer({
  name: 'jwt',
  jwt: {
    audiences: [UserPoolClient.id],
    issuer: $interpolate`https://cognito-idp.${
      aws.getArnOutput(UserPool).region
    }.amazonaws.com/${UserPool.id}`,
    ttl: '24 hours',
  },
});

// Contacts
Api.route(
  'GET /contacts',
  {
    handler: 'packages/functions/src/contacts.list',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'POST /contacts',
  {
    handler: 'packages/functions/src/contacts.create',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'GET /contacts/{contactId}',
  {
    handler: 'packages/functions/src/contacts.read',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'POST /contacts/{contactId}',
  {
    handler: 'packages/functions/src/contacts.update',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'DELETE /contacts/{contactId}',
  {
    handler: 'packages/functions/src/contacts.delete',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

// Contact Methods
Api.route(
  'GET /contacts/{contactId}/methods',
  {
    handler: 'packages/functions/src/contact-methods.list',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'POST /contacts/{contactId}/methods',
  {
    handler: 'packages/functions/src/contact-methods.create',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'GET /contacts/{contactId}/methods/{methodId}',
  {
    handler: 'packages/functions/src/contact-methods.read',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'POST /contacts/{contactId}/methods/{methodId}',
  {
    handler: 'packages/functions/src/contact-methods.update',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'DELETE /contacts/{contactId}/methods/{methodId}',
  {
    handler: 'packages/functions/src/contact-methods.delete',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);


// Communication
Api.route(
  'GET /contacts/{contactId}/communication',
  {
    handler: 'packages/functions/src/communication.list',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'POST /contacts/{contactId}/communication',
  {
    handler: 'packages/functions/src/communication.create',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'GET /contacts/{contactId}/communication/{communicationId}',
  {
    handler: 'packages/functions/src/communication.read',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'POST /contacts/{contactId}/communication/{communicationId}',
  {
    handler: 'packages/functions/src/communication.update',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'DELETE /contacts/{contactId}/communication/{communicationId}',
  {
    handler: 'packages/functions/src/communication.delete',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);


// notes
Api.route(
  'GET /contacts/{contactId}/notes',
  {
    handler: 'packages/functions/src/notes.list',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'GET /contacts/{contactId}/communication/{communicationId}/notes',
  {
    handler: 'packages/functions/src/notes.list',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'POST /contacts/{contactId}/notes',
  {
    handler: 'packages/functions/src/notes.create',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);


Api.route(
  'POST /contacts/{contactId}/communication/{communicationId}/notes',
  {
    handler: 'packages/functions/src/notes.create',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'GET /contacts/{contactId}/notes/{noteId}',
  {
    handler: 'packages/functions/src/notes.read',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'POST /contacts/{contactId}/notes/{noteId}',
  {
    handler: 'packages/functions/src/notes.update',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);

Api.route(
  'DELETE /contacts/{contactId}/notes/{noteId}',
  {
    handler: 'packages/functions/src/notes.delete',
    link: [ContactsTable],
  },
  {
    auth: {
      jwt: {
        authorizer: jwt.id,
      },
    },
  }
);
