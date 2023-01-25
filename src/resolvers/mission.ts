import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    missions: async (obj, { find, limit, offset }, context) => {
      return [];
    },
    missionsResult: (obj, { find, limit, offset }, context) => {
      return { result: { totalCount: 0 } };
    },
    mission: async (obj, { id }, context) => {
      return undefined;
    },
  },
};

export { resolvers };
