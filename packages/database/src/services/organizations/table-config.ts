import { Resource } from "sst";
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({
  region: 'us-east-1', // TODO: Use the region from the stack
});

// highlight-next-line
const table = Resource.OrganizationsTable.name;

export const DDB_CONFIG = {
  client,
  table,
};
