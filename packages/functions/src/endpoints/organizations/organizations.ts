import { OrganizationUpdateValidator } from '@gamify/core/entities';
import { AccessDeniedError, NotFoundError } from '@gamify/core/errors';
import { ApiWrapper } from '@gamify/core/helpers';
import { OrganizationsService } from '@gamify/database/services';

export const create = ApiWrapper(async evt => {
  const body = JSON.parse(evt?.body ?? '{}');

  const parsedBody = OrganizationUpdateValidator.parse(body);

  return OrganizationsService.entities.organization.create(parsedBody).go();
});

export const read = ApiWrapper(async evt => {
  const { organizationId } = evt?.pathParameters ?? {};

  if (!organizationId) {
    throw new AccessDeniedError('Organization ID is required');
  }

  return OrganizationsService.collections.organization({ organizationId }).go();
});

export const update = ApiWrapper(async evt => {
  const { organizationId } = evt?.pathParameters ?? {};
  const body = JSON.parse(evt?.body ?? '{}');

  if (!organizationId) {
    throw new AccessDeniedError('Organization ID is required');
  }

  const parsedBody = OrganizationUpdateValidator.parse(body);

  const existing = await OrganizationsService.entities.organization
    .get({ organizationId })
    .go();

  if (!existing.data) {
    throw new NotFoundError('Organization not found');
  }

  await OrganizationsService.entities.organization
    .upsert({ organizationId, ...parsedBody })
    .go();

  return OrganizationsService.entities.organization
    .get({ organizationId })
    .go();
});


export const list = ApiWrapper(async evt => {
  // TODO: THis should look at the user's organization and only return orgs they can access
  return OrganizationsService.entities.organization.find({}).go();
});

export const remove = ApiWrapper(async evt => {
  const { organizationId } = evt?.pathParameters ?? {};
  const body = JSON.parse(evt?.body ?? '{}');

  if (!organizationId) {
    throw new AccessDeniedError('Organization ID is required');
  }

  // TODO: Switch to soft delete
  return OrganizationsService.entities.organization
    .delete({ organizationId })
    .go();
});
