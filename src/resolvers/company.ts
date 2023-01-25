import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    company: (obj, args, context) => {
      return context.api.company();
    }
  }
} 

export { resolvers };