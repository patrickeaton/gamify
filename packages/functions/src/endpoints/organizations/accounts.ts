import { OrganizationAccountUpdateValidator } from '@gamify/core/entities';
import { AccessDeniedError, NotFoundError } from '@gamify/core/errors';
import { ApiWrapper } from '@gamify/core/helpers';
import { OrganizationsService } from '@gamify/database/services';

export const create = ApiWrapper(async evt => {
  const { organizationId } = evt?.pathParameters ?? {};

  const body = JSON.parse(evt?.body ?? '{}');

  if (!organizationId) {
    throw new AccessDeniedError('Organization ID is required');
  }

  const parsedBody = OrganizationAccountUpdateValidator.parse(body);

  return OrganizationsService.entities.organizationAccount
    .create({ ...parsedBody, organizationId })
    .go();
});

export const read = ApiWrapper(async evt => {
  const { organizationId, accountId } = evt?.pathParameters ?? {};

  if (!organizationId || !accountId) {
    throw new AccessDeniedError('organizationId and accountId are required');
  }

  return OrganizationsService.entities.organizationAccount
    .get({ organizationId, accountId })
    .go();
});

export const update = ApiWrapper(async evt => {
  const { organizationId, accountId } = evt?.pathParameters ?? {};
  const body = JSON.parse(evt?.body ?? '{}');

  if (!organizationId || !accountId) {
    throw new AccessDeniedError('organizationId and accountId are required');
  }

  const parsedBody = OrganizationAccountUpdateValidator.parse(body);

  const existing = await OrganizationsService.entities.organizationAccount
    .get({ organizationId, accountId })
    .go();

  if (!existing.data) {
    throw new NotFoundError('Organization Account not found');
  }

  await OrganizationsService.entities.organizationAccount
    .upsert({ organizationId, accountId, ...parsedBody })
    .go();

  return OrganizationsService.entities.organizationAccount
    .get({ organizationId, accountId })
    .go();
});

export const list = ApiWrapper(async evt => {
  const { organizationId } = evt?.pathParameters ?? {};
  // TODO: THis should look at the user's organization and only return orgs they can access
  return OrganizationsService.entities.organizationAccount
    .find({
      organizationId,
    })
    .go();
});

export const remove = ApiWrapper(async evt => {
  const { organizationId, accountId } = evt?.pathParameters ?? {};

  if (!organizationId || !accountId) {
    throw new AccessDeniedError('organizationId and accountId are required');
  }

  // TODO: Switch to soft delete
  return OrganizationsService.entities.organizationAccount
    .delete({ organizationId, accountId })
    .go();
});
