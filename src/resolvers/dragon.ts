import { applyLimitOffset } from "../limit-offset-service";
import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    dragons: async (obj, { limit, offset }, context) => {
      const dragons = await context.api.getDragons();
      return applyLimitOffset({ data: dragons, limit, offset });
    },
    dragon: (obj, { id }, context) => {
      return context.api.getDragon(id);
    },
  },
  Capsule: {
    dragon: async (parent, args, context) => {
      return undefined;
    },
  },
};

export { resolvers };
