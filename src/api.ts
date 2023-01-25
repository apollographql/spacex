import {
  Capsule,
  Core,
  Dragon,
  History,
  Info,
  Landpad,
  Launch,
  Launchpad,
  Mission,
  Payload,
  Roadster,
  Rocket,
  RocketsResult,
  Ship,
  ShipsResult,
} from "./__generated__/resolvers-types";

import fetch from "node-fetch";

export default class API {
  baseUrl = "https://api.spacexdata.com";

  getCapsules() {
    return this.get<Array<Capsule>>("capsules");
  }
  getCapsule(id: string) {
    return this.get<Capsule>(`capsules/${id}`);
  }
  company() {
    return this.get<Info>("company");
  }
  getCores() {
    return this.get<Array<Core>>("cores");
  }
  getCore(id: string) {
    return this.get<Core>(`cores/${id}`);
  }
  getDragons() {
    return this.get<Array<Dragon>>("dragons");
  }
  getDragon(id: string) {
    return this.get<Dragon>(`dragons/${id}`);
  }
  getHistoryEvents() {
    return this.get<Array<History>>("history");
  }
  getHistoryEvent(id: string) {
    return this.get<History>(`history/${id}`);
  }
  queryHistoryEvent(query: Object) {
    return this.post<Array<History>>("history/query", query);
  }
  getLandpads() {
    return this.get<Array<Landpad>>("landpads");
  }
  getLandpad(id: string) {
    return this.get<Landpad>(`landpads/${id}`);
  }
  getLaunches() {
    return this.get<Array<Launch>>("launches");
  }
  getPastLaunches() {
    return this.get<Array<Launch>>("launches/past", 5);
  }
  getLaunch(id: string) {
    return this.get<Launch>(`launches/${id}`, 5);
  }
  getLatestLaunch() {
    return this.get<Launch>(`launches/latest`, 5);
  }
  getUpcomingLaunchs() {
    return this.get<Array<Launch>>(`launches/upcoming`, 5);
  }
  getNextLaunch() {
    return this.get<Launch>(`launches/next`, 5);
  }
  queryNextLaunch(query: Object) {
    return this.post<Array<Launch>>("launches/query", query);
  }
  getRockets() {
    return this.get<Array<Rocket>>(`rockets`);
  }
  getRocket(id: string) {
    return this.get<Rocket>(`rockets/${id}`);
  }
  queryRocket(query: Object) {
    return this.post<RocketsResult>(`rockets/query`, query);
  }
  getShips() {
    return this.get<Array<Ship>>(`ships`);
  }
  getShip(id: string) {
    return this.get<Ship>(`ships/${id}`);
  }
  queryShips(query: Object) {
    return this.post<ShipsResult>(`ships/query`, query);
  }
  getLaunchPads() {
    return this.get<Array<Launchpad>>(`launchpads`);
  }
  getLaunchPad(id: string) {
    return this.get<Launchpad>(`launchpads/${id}`);
  }
  getPayloads() {
    return this.get<Array<Payload>>(`payloads`);
  }
  getPayload(id: string) {
    return this.get<Payload>(`payloads/${id}`);
  }
  queryPayloads(query: Object) {
    return this.post<Array<Payload>>(`payloads/query`, query);
  }
  getRoadster() {
    return this.get<Roadster>(`roadster`);
  }
  private async get<T>(slug: string, version = 4) {
    const response = await fetch(`${this.baseUrl}/v${version}/${slug}`);
    return (await response.json()) as T;
  }
  private async post<T>(slug: string, obj: Object, version = 4) {
    const response = await fetch(`${this.baseUrl}/v${version}/${slug}`, {
      method: "POST",
      body: JSON.stringify(obj),
    });
    return (await response.json()) as T;
  }
}
