import { Launch } from "./__generated__/resolvers-types";

export const parseShip = (ship: any) => ({
  ...ship,
  id: ship.ship_id,
  name: ship.ship_name,
  model: ship.ship_model,
  type: ship.ship_type
});

export const parseLaunchpad = (pad: any) => {
  pad.name = pad.full_name;
  const { padid, full_name, ...padParsed } = pad;
  return padParsed;
};

export const parseMissions = (mission: any) => ({
  ...mission,
  id: mission.mission_id,
  name: mission.mission_name
});

export const parsePayloadObj = (payload: any) => ({ ...payload, id: payload.payload_id });

export const parsePayloads = (data: any, query: any) => {
  const payloads: Array<any> = [];
  let match: number;
  data.forEach((launch: Launch) => {
    launch.rocket.second_stage.payloads.forEach(payloadObj => {
      let payload = parsePayloadObj(payloadObj);
      match = 0;
      if (Object.keys(query).length !== 0) {
        Object.entries(query).forEach(([key, value]) => {
          if (value === payload[key]) {
            match += 1;
          }
        });
        if (match === Object.keys(query).length) {
          payloads.push(payload);
        }
      } else {
        payloads.push(payload);
      }
    });
  });
  return payloads;
};

export const parsePayload = (payload: any, payload_id: any) => {
  if (!payload) return null;
  const { payloads } = payload.rocket.second_stage;
  let index = 0;
  const parsedPayloads = payloads.map((payloadObj: any, i: number) => {
    let payload = parsePayloadObj(payloadObj);
    if (payload.id === payload_id) {
      index = i;
    }
    return payload;
  });
  return parsedPayloads[index];
};