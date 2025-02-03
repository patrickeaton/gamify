import { AuditEntity } from '../base';

export type Badge = AuditEntity & {
  organizationId: string;
  badgeId: string;
  name: string;
  description: string;
  icon: string;
  /**
   * Whether or not to show this badge to the user.
   * public - Always visible to the user.
   * public_in_progress - Visible to the user if they have progress towards the badge.
   * private - Only visible to the organization.
   */
  visibility: 'public' | 'public_in_progress' | 'private'; // TODO: Convert to const and type
  frequency: 'once' | 'daily' | 'weekly' | 'monthly' | 'yearly'; // TODO: Convert to const and type
};
