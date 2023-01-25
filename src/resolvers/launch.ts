import { parseShip } from "../parse-service";
import { applyLimitOffset } from "../limit-offset-service";
import {
  LaunchesPastResult,
  LaunchRocket,
  Resolvers,
  Rocket,
} from "../__generated__/resolvers-types";

const resolvers: Resolvers = {
  Query: {
    launches: async (obj, { find, offset, order, sort, limit }, context) => {
      const data = await context.api.getLaunches();
      return applyLimitOffset({ data, limit, offset });
    },
    launchesPast: async (
      obj,
      { find, offset, order, sort, limit },
      context
    ) => {
      const data = await context.api.getPastLaunches();
      return applyLimitOffset({ data, limit, offset });
    },
    launchesPastResult: async (
      obj,
      { find, offset, order, sort, limit },
      context
    ): Promise<LaunchesPastResult> => {
      const data = await context.api.queryNextLaunch(find);
      if (data) return { data, result: { totalCount: data.length } };
      else return { result: { totalCount: 0 } };
    },
    launchesUpcoming: async (
      obj,
      { find, offset, order, sort, limit },
      context
    ) => {
      const data = await context.api.getUpcomingLaunchs();
      return applyLimitOffset({ data, limit, offset });
    },
    launch: (obj, { id }, context) => {
      return context.api.getLaunch(id);
    },
    launchLatest: (obj, { offset }, context) => {
      return context.api.getLatestLaunch();
    },
    launchNext: (obj, { offset }, context) => {
      return context.api.getNextLaunch();
    },
  },
  LaunchRocketFirstStageCore: {
    core: async (parent, args, context) => {
      return context.api.getCore((parent as any)?.core_serial);
    },
  },
  Launch: {
    ships: async (parent, args, context) => {
      return parent.ships.map(async (ship: any) => {
        const result = await context.api.getShip(ship.ship_id);
        return parseShip(result);
      });
    },
    rocket: async (parent, args, context) => {
      const id = parent as string;
      if (typeof parent.rocket === "string") {
        const rocket = await context.api.getRocket(parent.rocket as string);
        return {
          rocket,
          fairings: (parent as any)?.fairings,
          rocket_name: rocket.name,
          rocket_type: rocket.type,
        };
      } else return parent.rocket;
    },
    links: (parent, args, context) => {
      const links = parent.links as any;
      return {
        ...parent.links,
        article_link: links?.article,
        flickr_images: links?.flickr?.original,
        reddit_campaign: links?.reddit?.campaign,
        reddit_launch: links?.reddit?.launch,
        reddit_media: links?.reddit?.media,
        reddit_recovery: links?.reddit?.recovery,
        video_link: links?.webcast,
      };
    },
    launch_date_local: (parent: any) => parent?.date_local,
    launch_date_unix: (parent: any) => parent?.date_unix,
    launch_date_utc: (parent: any) => parent?.date_utc,
    launch_success: (parent: any) => parent?.launch_success,
    launch_year: (parent: any) => parent?.date_local?.splice(0, 4),
    mission_name: (parent: any) => parent?.name,
    mission_id: (parent) => [parent.id],
    telemetry: (parent) => {
      return parent.telemetry;
    },
    upcoming: async (parent) => {
      await new Promise((r) => setTimeout(r, 3000));
      return parent.upcoming;
    },
  },
  History: {
    flight: async (parent, args, context) => {
      const data = await context.api.queryNextLaunch({
        flight_number: (parent as any)?.flight_number,
      });
      return data.length > 0 ? data[0] : undefined;
    },
  },
};
export { resolvers };
