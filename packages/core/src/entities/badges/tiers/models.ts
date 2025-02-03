import { AuditEntity } from '../../base';

export type BadgeTier = AuditEntity & {
    organizationId: string;
    badgeId: string;
    tierId: string;
    name: string;
    color: string;
    icon?: string;
    threshold: number;
}