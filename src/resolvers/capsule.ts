import { Capsule, Resolvers } from "../__generated__/resolvers-types";

const applyLimitOffset = ({
  data,
  limit,
  offset,
}: {
  data: Array<any>;
  limit: number;
  offset: number;
}) => {
  if (limit && offset) {
    if (limit + offset > data.length) return data.slice(offset);
    return data.slice(offset, limit);
  } else if (limit) {
    return data.slice(0, limit);
  } else if (offset) {
    return data.slice(offset);
  } else {
    return data;
  }
};

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
    capsule: async (obj, { id }, context) => {
      return await context.api.getCapsule(id);
    },
  },
};
const parseCapsules = (capsule: any) => ({
  ...capsule,
  // id: capsule.capsule_serial,
  launches: capsule.launches && capsule.launches.length > 0 ? capsule.launches[0] : undefined
});
export { resolvers };
