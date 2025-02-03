import { AuditEntity } from '../../base';
import { EVENT_VALUE_TYPES } from '../constants';

export type EventValueType = keyof typeof EVENT_VALUE_TYPES;

export type BadgeProgressEvent = AuditEntity & {
  organizationId: string;
  badgeId: string;
  userId: string;
  badgeProgressEventId: string;

  // The amount of progress towards the next tier.
  type: EventValueType;
  value: number;
};
