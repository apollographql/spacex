import merge from "lodash/merge";
import { resolvers as capsule } from "./capsule";
import { resolvers as company } from "./company";
import { resolvers as core } from "./core";
import { resolvers as dragon } from "./dragon";
import { resolvers as history } from "./history";
import { resolvers as landpad } from "./landpad";
import { resolvers as launch } from "./launch";
import { resolvers as launchpad } from "./launchpad";
import { resolvers as mission } from "./mission";
import { resolvers as payloads } from "./payloads";
import { resolvers as roadster } from "./roadster";
import { resolvers as rocket } from "./rocket";
import { resolvers as ships } from "./ships";

const resolvers = merge(
  capsule,
  company,
  core,
  dragon,
  history,
  landpad,
  launch,
  launchpad,
  mission,
  payloads,
  roadster,
  rocket,
  ships
);

export default resolvers;
