import { Service } from 'electrodb';
import { DDB_CONFIG } from './table-config';
import {
  OrganizationEntity,
  OrganizationAccountEntity,
} from './entities';

export const OrganizationsService = new Service(
  {
    organization: OrganizationEntity,
    organizationAccount: OrganizationAccountEntity,
  },
  DDB_CONFIG
);
