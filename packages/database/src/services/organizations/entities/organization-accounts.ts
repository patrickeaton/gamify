import { Entity } from 'electrodb';
import { DDB_CONFIG } from '../table-config';
import crypto from 'crypto';

export const OrganizationAccountEntity = new Entity(
  {
    model: {
      entity: 'organizationAccount',
      version: '1',
      service: 'organization',
    },
    attributes: {
      organizationId: {
        type: 'string',
        required: true,
      },
      accountId: {
        type: 'string',
        readOnly: true,
        default: () => crypto.randomUUID(),
      },
      name: {
        type: 'string',
        required: true,
      },
      email: {
        type: 'string',
        required: true,
      },
      phone: {
        type: ['string', 'null'],
        required: false,
      },
      created: {
        type: 'any',
        readOnly: true,
        required: true,
        default: () => Date.now(),
        set: () => Date.now(),
        get: (value: number) => new Date(value), // Make it any
      },
      updated: {
        type: 'any',
        watch: '*',
        required: true,
        default: () => Date.now(),
        set: () => Date.now(),
        get: (value: number) => new Date(value),
      },
    },
    indexes: {
      organizationAccount: {
        pk: {
          field: 'pk',
          composite: ['organizationId', 'accountId'],
        },
        sk: {
          field: 'sk',
          composite: [],
        },
      },
      organization: {
        collection: 'organization',
        index: 'gsi2pk-gsi2sk-index',
        pk: {
          field: 'gsi2pk',
          composite: ['organizationId'],
        },
        sk: {
          field: 'gsi2sk',
          composite: [],
        },
      },
    },
  },
  DDB_CONFIG
);
