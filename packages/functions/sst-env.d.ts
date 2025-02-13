/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "ApiGateway": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
    "AuthIdentityPool": {
      "id": string
      "type": "sst.aws.CognitoIdentityPool"
    }
    "AuthUserPool": {
      "id": string
      "type": "sst.aws.CognitoUserPool"
    }
    "AuthUserPoolClient": {
      "id": string
      "secret": string
      "type": "sst.aws.CognitoUserPoolClient"
    }
    "ContactsTable": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
    "StorageBucket": {
      "name": string
      "type": "sst.aws.Bucket"
    }
  }
}
