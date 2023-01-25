import { applyLimitOffset } from "../limit-offset-service";
import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    landpads: async (obj, { limit, offset }, context) => {
      const data = await context.api.getLandpads();
      return applyLimitOffset({ data, limit, offset });
    },
    landpad: async (obj, { id }, context) => {
      return context.api.getLandpad(id);
    },
  }
};

export { resolvers };
