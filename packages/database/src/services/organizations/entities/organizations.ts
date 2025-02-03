import { Entity } from 'electrodb';
import { DDB_CONFIG } from '../table-config';
import crypto from 'crypto';

export const OrganizationEntity = new Entity(
  {
    model: {
      entity: 'organization',
      version: '1',
      service: 'organization',
    },
    attributes: {
      organizationId: {
        type: 'string',
        readOnly: true,
        default: () => crypto.randomUUID(),
      },
      name: {
        type: 'string',
        required: true,
      },
      timezone: {
        type: 'string',
        required: true,
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
      organization: {
        pk: {
          field: 'pk',
          composite: ['organizationId'],
        },
        sk: {
          field: 'sk',
          composite: [],
        },
      },
      organizationLookup: {
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
