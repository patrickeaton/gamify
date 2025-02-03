import { AuditEntity } from '../../base';

export type OrganizationAccount = AuditEntity & {
  organizationId: string;
  accountId: string;
//   role: string; // TODO: Add role enum
  name: string;
//   status: string; // TODO: Add status enum
  email: string;
  phone: string;
};
