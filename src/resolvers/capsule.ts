import { applyLimitOffset } from "../limit-offset-service";
import { Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    capsules: async (obj, { find, offset, order, sort, limit }, context) => {
      const capsules = await context.api.getCapsules();
      return applyLimitOffset({ data: capsules, limit, offset });
    },
    capsulesPast: async (
      obj,
      { find, offset, order, sort, limit },
      context
    ) => {
      const capsules = await context.api.getCapsules();
      return applyLimitOffset({ data: capsules, limit, offset });
    },
    capsulesUpcoming: async (
      obj,
      { find, offset, order, sort, limit },
      context
    ) => {
      return [];
    },
    capsule: (obj, { id }, context) => {
      return context.api.getCapsule(id);
    },
  },
};
const parseCapsules = (capsule: any) => ({
  ...capsule,
  // id: capsule.capsule_serial,
  launches:
    capsule.launches && capsule.launches.length > 0
      ? capsule.launches[0]
      : undefined,
});
export { resolvers };
