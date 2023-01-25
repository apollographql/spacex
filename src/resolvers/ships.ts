import { applyLimitOffset } from "../limit-offset-service";
import { parseShip } from "../parse-service";
import { Resolvers, Ship } from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    ships: async (obj, { find, offset, order, sort, limit }, context) => {
      let data: Array<Ship>;
      if (find) data = (await context.api.queryShips(find)).data;
      else data = await context.api.getShips();

      data.map((d: any) => parseShip(d));
      return applyLimitOffset({ data, limit, offset });
    },
    shipsResult: async (obj, { find, offset, order, sort, limit }, context) => {
      const results = await context.api.queryShips(find);
      return {
        ...results,
        data: applyLimitOffset({
          data: results.data.map((d: any) => parseShip(results.data)),
          limit,
          offset,
        }),
      };
    },
    ship: async (obj, { id }, context) => {
      const ship = await context.api.getShip(id);
      return parseShip(ship);
    },
  },
};

export { resolvers };
