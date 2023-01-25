import { applyLimitOffset } from "../limit-offset-service";
import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    rockets: async (obj, { limit, offset }, context) => {
      const data = await context.api.getRockets();
      return applyLimitOffset({ data, limit, offset });
    },
    rocketsResult: (obj, { limit, offset }, context) => {
      return context.api.queryRocket({ limit, offset });
    },
    rocket: async (obj, { id }, context) => {
      return context.api.getRocket(id);
    },
  },
};

export { resolvers };
