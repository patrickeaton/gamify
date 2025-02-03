/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "gamify",
      removal: input?.stage === "production" ? "retain" : "remove",
      providers: {
        aws: {
          profile: 'gamify',
        }
      },
      home: "aws",
    };
  },
  async run() {
    await import("./infrastructure/storage");
    await import("./infrastructure/database");
    const api = await import("./infrastructure/api");

    return {
      api: api.Api.url,
    };
  },
});
