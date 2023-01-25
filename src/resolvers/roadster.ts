import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    roadster: (obj, args, context) => {
      return context.api.getRoadster();
    }
  }
};

export { resolvers };