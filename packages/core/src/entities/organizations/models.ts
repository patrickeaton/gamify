import { AuditEntity } from '../base';

export type Organization = AuditEntity & {
  organizationId: string;
  name: string;
  timezone: string;
};
