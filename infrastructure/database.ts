export const OrganizationsTable = new sst.aws.Dynamo('OrganizationsTable', {
  // stream: 'new-and-old-images',
  fields: {
    pk: 'string',
    sk: 'string',
    gsi1pk: 'string',
    gsi1sk: 'string',
    gsi2pk: 'string',
    gsi2sk: 'string',
    gsi3pk: 'string',
    gsi3sk: 'string',
    gsi4pk: 'string',
    gsi4sk: 'string',
    lsi1sk: 'string',
  },
  primaryIndex: { hashKey: 'pk', rangeKey: 'sk' },
  globalIndexes: {
    'gsi1pk-gsi1sk-index': {
      hashKey: 'gsi1pk',
      rangeKey: 'gsi1sk',
    },
    'gsi2pk-gsi2sk-index': {
      hashKey: 'gsi2pk',
      rangeKey: 'gsi2sk',
    },
    'gsi3pk-gsi3sk-index': {
      hashKey: 'gsi3pk',
      rangeKey: 'gsi3sk',
    },
    'gsi4pk-gsi4sk-index': {
      hashKey: 'gsi4pk',
      rangeKey: 'gsi4sk',
    },
  },
  localIndexes: {
    lsi1: {
      rangeKey: 'lsi1sk',
    },
  },
});

export const BadgesTable = new sst.aws.Dynamo('BadgesTable', {
  // stream: 'new-and-old-images',
  fields: {
    pk: 'string',
    sk: 'string',
    gsi1pk: 'string',
    gsi1sk: 'string',
    gsi2pk: 'string',
    gsi2sk: 'string',
    gsi3pk: 'string',
    gsi3sk: 'string',
    gsi4pk: 'string',
    gsi4sk: 'string',
    lsi1sk: 'string',
  },
  primaryIndex: { hashKey: 'pk', rangeKey: 'sk' },
  globalIndexes: {
    'gsi1pk-gsi1sk-index': {
      hashKey: 'gsi1pk',
      rangeKey: 'gsi1sk',
    },
    'gsi2pk-gsi2sk-index': {
      hashKey: 'gsi2pk',
      rangeKey: 'gsi2sk',
    },
    'gsi3pk-gsi3sk-index': {
      hashKey: 'gsi3pk',
      rangeKey: 'gsi3sk',
    },
    'gsi4pk-gsi4sk-index': {
      hashKey: 'gsi4pk',
      rangeKey: 'gsi4sk',
    },
  },
  localIndexes: {
    lsi1: {
      rangeKey: 'lsi1sk',
    },
  },
});

export const UsersTable = new sst.aws.Dynamo('UsersTable', {
  // stream: 'new-and-old-images',
  fields: {
    pk: 'string',
    sk: 'string',
    gsi1pk: 'string',
    gsi1sk: 'string',
    gsi2pk: 'string',
    gsi2sk: 'string',
    gsi3pk: 'string',
    gsi3sk: 'string',
    gsi4pk: 'string',
    gsi4sk: 'string',
    lsi1sk: 'string',
  },
  primaryIndex: { hashKey: 'pk', rangeKey: 'sk' },
  globalIndexes: {
    'gsi1pk-gsi1sk-index': {
      hashKey: 'gsi1pk',
      rangeKey: 'gsi1sk',
    },
    'gsi2pk-gsi2sk-index': {
      hashKey: 'gsi2pk',
      rangeKey: 'gsi2sk',
    },
    'gsi3pk-gsi3sk-index': {
      hashKey: 'gsi3pk',
      rangeKey: 'gsi3sk',
    },
    'gsi4pk-gsi4sk-index': {
      hashKey: 'gsi4pk',
      rangeKey: 'gsi4sk',
    },
  },
  localIndexes: {
    lsi1: {
      rangeKey: 'lsi1sk',
    },
  },
});

export const EventsTable = new sst.aws.Dynamo('EventsTable', {
  // stream: 'new-and-old-images',
  fields: {
    pk: 'string',
    sk: 'string',
    gsi1pk: 'string',
    gsi1sk: 'string',
    gsi2pk: 'string',
    gsi2sk: 'string',
    gsi3pk: 'string',
    gsi3sk: 'string',
    gsi4pk: 'string',
    gsi4sk: 'string',
    lsi1sk: 'string',
  },
  primaryIndex: { hashKey: 'pk', rangeKey: 'sk' },
  globalIndexes: {
    'gsi1pk-gsi1sk-index': {
      hashKey: 'gsi1pk',
      rangeKey: 'gsi1sk',
    },
    'gsi2pk-gsi2sk-index': {
      hashKey: 'gsi2pk',
      rangeKey: 'gsi2sk',
    },
    'gsi3pk-gsi3sk-index': {
      hashKey: 'gsi3pk',
      rangeKey: 'gsi3sk',
    },
    'gsi4pk-gsi4sk-index': {
      hashKey: 'gsi4pk',
      rangeKey: 'gsi4sk',
    },
  },
  localIndexes: {
    lsi1: {
      rangeKey: 'lsi1sk',
    },
  },
});
