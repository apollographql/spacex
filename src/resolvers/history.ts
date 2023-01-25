import { applyLimitOffset } from "../limit-offset-service";
import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    histories: async (obj, { find, offset, order, sort, limit }, context) => {
      const data = await context.api.getHistoryEvents();
      return applyLimitOffset({ data, limit, offset });
    },
    historiesResult: async (
      obj,
      { find, offset, order, sort, limit },
      context
    ) => {
      const data = await context.api.queryHistoryEvent(find);
      if (data) return { data, result: { totalCount: data.length } };
      else return { result: { totalCount: 0 } };
    },
    history: async (obj, { id }, context) => {
      return context.api.getHistoryEvent(id);
    },
  },
};

export { resolvers };
