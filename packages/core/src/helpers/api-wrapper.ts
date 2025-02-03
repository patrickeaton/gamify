export const ApiWrapper =
  <TResponse = any>(
    handlerFunc: (
      evt: AWSLambda.APIGatewayProxyEventV2WithJWTAuthorizer,
      ctx?: AWSLambda.APIGatewayEventRequestContext
    ) => Promise<TResponse>
  ) =>
  async (
    evt: AWSLambda.APIGatewayProxyEventV2WithJWTAuthorizer,
    ctx?: AWSLambda.APIGatewayEventRequestContext
  ) => {
    try {
      const res = await handlerFunc(evt, ctx);
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
      };
    } catch (e: any) {
      // Format Zod errors
      const message = e.format
        ? e.format()
        : e?.message ?? 'Internal Server Error';

      return {
        statusCode: e?.statusCode ?? 500,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          error: message,
          details: e,
        }),
      };
    }
  };
