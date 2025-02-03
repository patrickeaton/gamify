import { AuditEntity } from '../../base';

export type BadgeProgress = AuditEntity & {
  id: string;
  badgeId: string;
  userId: string;
  // The current progress towards the next tier.
  progress: number;
};
