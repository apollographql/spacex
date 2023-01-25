import { parseLaunchpad } from "../parse-service";
import { applyLimitOffset } from "../limit-offset-service";
import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    launchpads: async (obj, { limit, offset }, context) => {
      const data = await context.api.getLandpads();
      return applyLimitOffset({ data, limit, offset });
    },
    launchpad: async (obj, { id }, context) => {
      const launchPad = await context.api.getLaunchPad(id);
      return parseLaunchpad(launchPad);
    },
  },
  Launchpad: {
    vehicles_launched: async ({ vehicles_launched }, args, context) => {
      return vehicles_launched.map(async (name) => {
        const rocketResult = await context.api.queryRocket({name});
        if(rocketResult.result.totalCount == 0) return undefined;
        return rocketResult.data[0];
      })
    },
  },
};

export { resolvers };
