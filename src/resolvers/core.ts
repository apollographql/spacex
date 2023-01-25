import { applyLimitOffset } from "../limit-offset-service";
import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    cores: async (obj, { find, offset, order, sort, limit }, context) => {
      const cores = await context.api.getCores();
      return applyLimitOffset({ data: cores, limit, offset });
    },
    coresPast: async (obj, { find, offset, order, sort, limit }, context) => {
      const cores = await context.api.getCores();
      return applyLimitOffset({ data: cores, limit, offset });
    },
    coresUpcoming: async (
      obj,
      { find, offset, order, sort, limit },
      context
    ) => {
      return [];
    },
    core: async (obj, { id }, context) => {
      return await context.api.getCore(id);
    },
  },
};

export { resolvers };
