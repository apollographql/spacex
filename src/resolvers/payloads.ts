import { applyLimitOffset } from "../limit-offset-service";
import { parsePayload, parsePayloads } from "../parse-service";
import { Payload, Resolvers } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    payloads: async (obj, { find, offset, order, sort, limit }, context) => {
      let payloads: Array<Payload>;
      if (find) payloads = await context.api.queryPayloads(find);
      else payloads = await context.api.getPayloads();

      return applyLimitOffset({
        data: parsePayloads(payloads, { ...find }),
        limit,
        offset,
      });
    },
    payload: async (obj, { id }, context) => {
      const payload = await context.api.getPayload(id);
      return parsePayload(payload, {});
    },
  },
  Mission: {
    payloads: async (parent, args, context) => {
      if((parent as any)?.payload_ids){
        (parent as any)?.payload_ids.map(async (payload_id: string) => {
          const payload = await context.api.getPayload(payload_id);
          return parsePayload(payload, {});
        });
      } else {
        return undefined;
      }
    }
  }
};

export { resolvers };
