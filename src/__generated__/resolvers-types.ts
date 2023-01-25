import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { DataSourceContext } from '../types/DataSourceContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  ObjectID: any;
  timestamptz: any;
  uuid: any;
  _FieldSet: any;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type Capsule = {
  __typename?: 'Capsule';
  /** @deprecated This is not available in the REST API after MongoDB has been deprecated */
  dragon?: Maybe<Dragon>;
  id?: Maybe<Scalars['ID']>;
  landings?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CapsuleMission = {
  __typename?: 'CapsuleMission';
  flight?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CapsulesFind = {
  id?: InputMaybe<Scalars['ID']>;
  landings?: InputMaybe<Scalars['Int']>;
  mission?: InputMaybe<Scalars['String']>;
  original_launch?: InputMaybe<Scalars['Date']>;
  reuse_count?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Core = {
  __typename?: 'Core';
  asds_attempts?: Maybe<Scalars['Int']>;
  asds_landings?: Maybe<Scalars['Int']>;
  block?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  missions?: Maybe<Array<Maybe<CapsuleMission>>>;
  original_launch?: Maybe<Scalars['Date']>;
  reuse_count?: Maybe<Scalars['Int']>;
  rtls_attempts?: Maybe<Scalars['Int']>;
  rtls_landings?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  water_landing?: Maybe<Scalars['Boolean']>;
};

export type CoreMission = {
  __typename?: 'CoreMission';
  flight?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CoresFind = {
  asds_attempts?: InputMaybe<Scalars['Int']>;
  asds_landings?: InputMaybe<Scalars['Int']>;
  block?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  missions?: InputMaybe<Scalars['String']>;
  original_launch?: InputMaybe<Scalars['Date']>;
  reuse_count?: InputMaybe<Scalars['Int']>;
  rtls_attempts?: InputMaybe<Scalars['Int']>;
  rtls_landings?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  water_landing?: InputMaybe<Scalars['Boolean']>;
};

export type Distance = {
  __typename?: 'Distance';
  feet?: Maybe<Scalars['Float']>;
  meters?: Maybe<Scalars['Float']>;
};

export type Dragon = {
  __typename?: 'Dragon';
  active?: Maybe<Scalars['Boolean']>;
  crew_capacity?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Distance>;
  dry_mass_kg?: Maybe<Scalars['Int']>;
  dry_mass_lb?: Maybe<Scalars['Int']>;
  first_flight?: Maybe<Scalars['String']>;
  heat_shield?: Maybe<DragonHeatShield>;
  height_w_trunk?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']>;
  launch_payload_mass?: Maybe<Mass>;
  launch_payload_vol?: Maybe<Volume>;
  name?: Maybe<Scalars['String']>;
  orbit_duration_yr?: Maybe<Scalars['Int']>;
  pressurized_capsule?: Maybe<DragonPressurizedCapsule>;
  return_payload_mass?: Maybe<Mass>;
  return_payload_vol?: Maybe<Volume>;
  sidewall_angle_deg?: Maybe<Scalars['Float']>;
  thrusters?: Maybe<Array<Maybe<DragonThrust>>>;
  trunk?: Maybe<DragonTrunk>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type DragonHeatShield = {
  __typename?: 'DragonHeatShield';
  dev_partner?: Maybe<Scalars['String']>;
  material?: Maybe<Scalars['String']>;
  size_meters?: Maybe<Scalars['Float']>;
  temp_degrees?: Maybe<Scalars['Int']>;
};

export type DragonPressurizedCapsule = {
  __typename?: 'DragonPressurizedCapsule';
  payload_volume?: Maybe<Volume>;
};

export type DragonThrust = {
  __typename?: 'DragonThrust';
  amount?: Maybe<Scalars['Int']>;
  fuel_1?: Maybe<Scalars['String']>;
  fuel_2?: Maybe<Scalars['String']>;
  pods?: Maybe<Scalars['Int']>;
  thrust?: Maybe<Force>;
  type?: Maybe<Scalars['String']>;
};

export type DragonTrunk = {
  __typename?: 'DragonTrunk';
  cargo?: Maybe<DragonTrunkCargo>;
  trunk_volume?: Maybe<Volume>;
};

export type DragonTrunkCargo = {
  __typename?: 'DragonTrunkCargo';
  solar_array?: Maybe<Scalars['Int']>;
  unpressurized_cargo?: Maybe<Scalars['Boolean']>;
};

export type Force = {
  __typename?: 'Force';
  kN?: Maybe<Scalars['Float']>;
  lbf?: Maybe<Scalars['Float']>;
};

export type HistoriesResult = {
  __typename?: 'HistoriesResult';
  data?: Maybe<Array<Maybe<History>>>;
  result?: Maybe<Result>;
};

export type History = {
  __typename?: 'History';
  details?: Maybe<Scalars['String']>;
  event_date_unix?: Maybe<Scalars['Date']>;
  event_date_utc?: Maybe<Scalars['Date']>;
  flight?: Maybe<Launch>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Link>;
  title?: Maybe<Scalars['String']>;
};

export type HistoryFind = {
  end?: InputMaybe<Scalars['Date']>;
  flight_number?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  start?: InputMaybe<Scalars['Date']>;
};

export type Info = {
  __typename?: 'Info';
  ceo?: Maybe<Scalars['String']>;
  coo?: Maybe<Scalars['String']>;
  cto?: Maybe<Scalars['String']>;
  cto_propulsion?: Maybe<Scalars['String']>;
  employees?: Maybe<Scalars['Int']>;
  founded?: Maybe<Scalars['Int']>;
  founder?: Maybe<Scalars['String']>;
  headquarters?: Maybe<Address>;
  launch_sites?: Maybe<Scalars['Int']>;
  links?: Maybe<InfoLinks>;
  name?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  test_sites?: Maybe<Scalars['Int']>;
  valuation?: Maybe<Scalars['Float']>;
  vehicles?: Maybe<Scalars['Int']>;
};

export type InfoLinks = {
  __typename?: 'InfoLinks';
  elon_twitter?: Maybe<Scalars['String']>;
  flickr?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type Landpad = {
  __typename?: 'Landpad';
  attempted_landings?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  landing_type?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Launch = {
  __typename?: 'Launch';
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_tentative?: Maybe<Scalars['Boolean']>;
  launch_date_local?: Maybe<Scalars['Date']>;
  launch_date_unix?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_site?: Maybe<LaunchSite>;
  launch_success?: Maybe<Scalars['Boolean']>;
  launch_year?: Maybe<Scalars['String']>;
  links?: Maybe<LaunchLinks>;
  mission_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_name?: Maybe<Scalars['String']>;
  rocket?: Maybe<LaunchRocket>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  static_fire_date_unix?: Maybe<Scalars['Date']>;
  static_fire_date_utc?: Maybe<Scalars['Date']>;
  telemetry?: Maybe<LaunchTelemetry>;
  tentative_max_precision?: Maybe<Scalars['String']>;
  upcoming?: Maybe<Scalars['Boolean']>;
};

export type LaunchFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']>;
  block?: InputMaybe<Scalars['Int']>;
  cap_serial?: InputMaybe<Scalars['String']>;
  capsule_reuse?: InputMaybe<Scalars['String']>;
  core_flight?: InputMaybe<Scalars['Int']>;
  core_reuse?: InputMaybe<Scalars['String']>;
  core_serial?: InputMaybe<Scalars['String']>;
  customer?: InputMaybe<Scalars['String']>;
  eccentricity?: InputMaybe<Scalars['Float']>;
  end?: InputMaybe<Scalars['Date']>;
  epoch?: InputMaybe<Scalars['Date']>;
  fairings_recovered?: InputMaybe<Scalars['String']>;
  fairings_recovery_attempt?: InputMaybe<Scalars['String']>;
  fairings_reuse?: InputMaybe<Scalars['String']>;
  fairings_reused?: InputMaybe<Scalars['String']>;
  fairings_ship?: InputMaybe<Scalars['String']>;
  gridfins?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  inclination_deg?: InputMaybe<Scalars['Float']>;
  land_success?: InputMaybe<Scalars['String']>;
  landing_intent?: InputMaybe<Scalars['String']>;
  landing_type?: InputMaybe<Scalars['String']>;
  landing_vehicle?: InputMaybe<Scalars['String']>;
  launch_date_local?: InputMaybe<Scalars['Date']>;
  launch_date_utc?: InputMaybe<Scalars['Date']>;
  launch_success?: InputMaybe<Scalars['String']>;
  launch_year?: InputMaybe<Scalars['String']>;
  legs?: InputMaybe<Scalars['String']>;
  lifespan_years?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  mean_motion?: InputMaybe<Scalars['Float']>;
  mission_id?: InputMaybe<Scalars['String']>;
  mission_name?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  norad_id?: InputMaybe<Scalars['Int']>;
  orbit?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['String']>;
  payload_type?: InputMaybe<Scalars['String']>;
  periapsis_km?: InputMaybe<Scalars['Float']>;
  period_min?: InputMaybe<Scalars['Float']>;
  raan?: InputMaybe<Scalars['Float']>;
  reference_system?: InputMaybe<Scalars['String']>;
  regime?: InputMaybe<Scalars['String']>;
  reused?: InputMaybe<Scalars['String']>;
  rocket_id?: InputMaybe<Scalars['String']>;
  rocket_name?: InputMaybe<Scalars['String']>;
  rocket_type?: InputMaybe<Scalars['String']>;
  second_stage_block?: InputMaybe<Scalars['String']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']>;
  ship?: InputMaybe<Scalars['String']>;
  side_core1_reuse?: InputMaybe<Scalars['String']>;
  side_core2_reuse?: InputMaybe<Scalars['String']>;
  site_id?: InputMaybe<Scalars['String']>;
  site_name?: InputMaybe<Scalars['String']>;
  site_name_long?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Date']>;
  tbd?: InputMaybe<Scalars['String']>;
  tentative?: InputMaybe<Scalars['String']>;
  tentative_max_precision?: InputMaybe<Scalars['String']>;
};

export type LaunchLinks = {
  __typename?: 'LaunchLinks';
  article_link?: Maybe<Scalars['String']>;
  flickr_images?: Maybe<Array<Maybe<Scalars['String']>>>;
  mission_patch?: Maybe<Scalars['String']>;
  mission_patch_small?: Maybe<Scalars['String']>;
  presskit?: Maybe<Scalars['String']>;
  reddit_campaign?: Maybe<Scalars['String']>;
  reddit_launch?: Maybe<Scalars['String']>;
  reddit_media?: Maybe<Scalars['String']>;
  reddit_recovery?: Maybe<Scalars['String']>;
  video_link?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type LaunchRocket = {
  __typename?: 'LaunchRocket';
  fairings?: Maybe<LaunchRocketFairings>;
  first_stage?: Maybe<LaunchRocketFirstStage>;
  rocket?: Maybe<Rocket>;
  rocket_name?: Maybe<Scalars['String']>;
  rocket_type?: Maybe<Scalars['String']>;
  second_stage?: Maybe<LaunchRocketSecondStage>;
};

export type LaunchRocketFairings = {
  __typename?: 'LaunchRocketFairings';
  recovered?: Maybe<Scalars['Boolean']>;
  recovery_attempt?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
  ship?: Maybe<Scalars['String']>;
};

export type LaunchRocketFirstStage = {
  __typename?: 'LaunchRocketFirstStage';
  cores?: Maybe<Array<Maybe<LaunchRocketFirstStageCore>>>;
};

export type LaunchRocketFirstStageCore = {
  __typename?: 'LaunchRocketFirstStageCore';
  block?: Maybe<Scalars['Int']>;
  core?: Maybe<Core>;
  flight?: Maybe<Scalars['Int']>;
  gridfins?: Maybe<Scalars['Boolean']>;
  land_success?: Maybe<Scalars['Boolean']>;
  landing_intent?: Maybe<Scalars['Boolean']>;
  landing_type?: Maybe<Scalars['String']>;
  landing_vehicle?: Maybe<Scalars['String']>;
  legs?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type LaunchRocketSecondStage = {
  __typename?: 'LaunchRocketSecondStage';
  block?: Maybe<Scalars['Int']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
};

export type LaunchSite = {
  __typename?: 'LaunchSite';
  site_id?: Maybe<Scalars['String']>;
  site_name?: Maybe<Scalars['String']>;
  site_name_long?: Maybe<Scalars['String']>;
};

export type LaunchTelemetry = {
  __typename?: 'LaunchTelemetry';
  flight_club?: Maybe<Scalars['String']>;
};

export type LaunchesPastResult = {
  __typename?: 'LaunchesPastResult';
  data?: Maybe<Array<Maybe<Launch>>>;
  result?: Maybe<Result>;
};

export type Launchpad = {
  __typename?: 'Launchpad';
  attempted_launches?: Maybe<Scalars['Int']>;
  details?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  successful_launches?: Maybe<Scalars['Int']>;
  vehicles_launched?: Maybe<Array<Maybe<Rocket>>>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  article?: Maybe<Scalars['String']>;
  reddit?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
};

export type Mass = {
  __typename?: 'Mass';
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
};

export type Mission = {
  __typename?: 'Mission';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type MissionResult = {
  __typename?: 'MissionResult';
  data?: Maybe<Array<Maybe<Mission>>>;
  result?: Maybe<Result>;
};

export type MissionsFind = {
  id?: InputMaybe<Scalars['ID']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};


export type MutationDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


export type MutationInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


export type MutationUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

export type Payload = {
  __typename?: 'Payload';
  customers?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  manufacturer?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orbit?: Maybe<Scalars['String']>;
  orbit_params?: Maybe<PayloadOrbitParams>;
  payload_mass_kg?: Maybe<Scalars['Float']>;
  payload_mass_lbs?: Maybe<Scalars['Float']>;
  payload_type?: Maybe<Scalars['String']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type PayloadOrbitParams = {
  __typename?: 'PayloadOrbitParams';
  apoapsis_km?: Maybe<Scalars['Float']>;
  arg_of_pericenter?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch?: Maybe<Scalars['Date']>;
  inclination_deg?: Maybe<Scalars['Float']>;
  lifespan_years?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  mean_anomaly?: Maybe<Scalars['Float']>;
  mean_motion?: Maybe<Scalars['Float']>;
  periapsis_km?: Maybe<Scalars['Float']>;
  period_min?: Maybe<Scalars['Float']>;
  raan?: Maybe<Scalars['Float']>;
  reference_system?: Maybe<Scalars['String']>;
  regime?: Maybe<Scalars['String']>;
  semi_major_axis_km?: Maybe<Scalars['Float']>;
};

export type PayloadsFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']>;
  customer?: InputMaybe<Scalars['String']>;
  eccentricity?: InputMaybe<Scalars['Float']>;
  epoch?: InputMaybe<Scalars['Date']>;
  inclination_deg?: InputMaybe<Scalars['Float']>;
  lifespan_years?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  mean_motion?: InputMaybe<Scalars['Float']>;
  nationality?: InputMaybe<Scalars['String']>;
  norad_id?: InputMaybe<Scalars['Int']>;
  orbit?: InputMaybe<Scalars['String']>;
  payload_id?: InputMaybe<Scalars['ID']>;
  payload_type?: InputMaybe<Scalars['String']>;
  periapsis_km?: InputMaybe<Scalars['Float']>;
  period_min?: InputMaybe<Scalars['Float']>;
  raan?: InputMaybe<Scalars['Float']>;
  reference_system?: InputMaybe<Scalars['String']>;
  regime?: InputMaybe<Scalars['String']>;
  reused?: InputMaybe<Scalars['Boolean']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  capsule?: Maybe<Capsule>;
  capsules?: Maybe<Array<Maybe<Capsule>>>;
  capsulesPast?: Maybe<Array<Maybe<Capsule>>>;
  capsulesUpcoming?: Maybe<Array<Maybe<Capsule>>>;
  company?: Maybe<Info>;
  core?: Maybe<Core>;
  cores?: Maybe<Array<Maybe<Core>>>;
  coresPast?: Maybe<Array<Maybe<Core>>>;
  coresUpcoming?: Maybe<Array<Maybe<Core>>>;
  dragon?: Maybe<Dragon>;
  dragons?: Maybe<Array<Maybe<Dragon>>>;
  histories?: Maybe<Array<Maybe<History>>>;
  historiesResult?: Maybe<HistoriesResult>;
  history?: Maybe<History>;
  landpad?: Maybe<Landpad>;
  landpads?: Maybe<Array<Maybe<Landpad>>>;
  launch?: Maybe<Launch>;
  launchLatest?: Maybe<Launch>;
  launchNext?: Maybe<Launch>;
  launches?: Maybe<Array<Maybe<Launch>>>;
  launchesPast?: Maybe<Array<Maybe<Launch>>>;
  launchesPastResult?: Maybe<LaunchesPastResult>;
  launchesUpcoming?: Maybe<Array<Maybe<Launch>>>;
  launchpad?: Maybe<Launchpad>;
  launchpads?: Maybe<Array<Maybe<Launchpad>>>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  mission?: Maybe<Mission>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  missions?: Maybe<Array<Maybe<Mission>>>;
  /** @deprecated Mission is not available on REST API after MongoDB deprecation */
  missionsResult?: Maybe<MissionResult>;
  payload?: Maybe<Payload>;
  payloads?: Maybe<Array<Maybe<Payload>>>;
  roadster?: Maybe<Roadster>;
  rocket?: Maybe<Rocket>;
  rockets?: Maybe<Array<Maybe<Rocket>>>;
  rocketsResult?: Maybe<RocketsResult>;
  ship?: Maybe<Ship>;
  ships?: Maybe<Array<Maybe<Ship>>>;
  shipsResult?: Maybe<ShipsResult>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type QueryCapsuleArgs = {
  id: Scalars['ID'];
};


export type QueryCapsulesArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCapsulesPastArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCapsulesUpcomingArgs = {
  find?: InputMaybe<CapsulesFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCoreArgs = {
  id: Scalars['ID'];
};


export type QueryCoresArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCoresPastArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryCoresUpcomingArgs = {
  find?: InputMaybe<CoresFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryDragonArgs = {
  id: Scalars['ID'];
};


export type QueryDragonsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryHistoriesArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryHistoriesResultArgs = {
  find?: InputMaybe<HistoryFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryHistoryArgs = {
  id: Scalars['ID'];
};


export type QueryLandpadArgs = {
  id: Scalars['ID'];
};


export type QueryLandpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchLatestArgs = {
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchNextArgs = {
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchesArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchesPastArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchesPastResultArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchesUpcomingArgs = {
  find?: InputMaybe<LaunchFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryLaunchpadArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMissionArgs = {
  id: Scalars['ID'];
};


export type QueryMissionsArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryMissionsResultArgs = {
  find?: InputMaybe<MissionsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryPayloadArgs = {
  id: Scalars['ID'];
};


export type QueryPayloadsArgs = {
  find?: InputMaybe<PayloadsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryRocketArgs = {
  id: Scalars['ID'];
};


export type QueryRocketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryRocketsResultArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryShipArgs = {
  id: Scalars['ID'];
};


export type QueryShipsArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryShipsResultArgs = {
  find?: InputMaybe<ShipsFind>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type QueryUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type QueryUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Result = {
  __typename?: 'Result';
  totalCount?: Maybe<Scalars['Int']>;
};

export type Roadster = {
  __typename?: 'Roadster';
  apoapsis_au?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  earth_distance_km?: Maybe<Scalars['Float']>;
  earth_distance_mi?: Maybe<Scalars['Float']>;
  eccentricity?: Maybe<Scalars['Float']>;
  epoch_jd?: Maybe<Scalars['Float']>;
  inclination?: Maybe<Scalars['Float']>;
  launch_date_unix?: Maybe<Scalars['Date']>;
  launch_date_utc?: Maybe<Scalars['Date']>;
  launch_mass_kg?: Maybe<Scalars['Int']>;
  launch_mass_lbs?: Maybe<Scalars['Int']>;
  longitude?: Maybe<Scalars['Float']>;
  mars_distance_km?: Maybe<Scalars['Float']>;
  mars_distance_mi?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  norad_id?: Maybe<Scalars['Int']>;
  orbit_type?: Maybe<Scalars['Float']>;
  periapsis_arg?: Maybe<Scalars['Float']>;
  periapsis_au?: Maybe<Scalars['Float']>;
  period_days?: Maybe<Scalars['Float']>;
  semi_major_axis_au?: Maybe<Scalars['Float']>;
  speed_kph?: Maybe<Scalars['Float']>;
  speed_mph?: Maybe<Scalars['Float']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  active?: Maybe<Scalars['Boolean']>;
  boosters?: Maybe<Scalars['Int']>;
  company?: Maybe<Scalars['String']>;
  cost_per_launch?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  diameter?: Maybe<Distance>;
  engines?: Maybe<RocketEngines>;
  first_flight?: Maybe<Scalars['Date']>;
  first_stage?: Maybe<RocketFirstStage>;
  height?: Maybe<Distance>;
  id?: Maybe<Scalars['ID']>;
  landing_legs?: Maybe<RocketLandingLegs>;
  mass?: Maybe<Mass>;
  name?: Maybe<Scalars['String']>;
  payload_weights?: Maybe<Array<Maybe<RocketPayloadWeight>>>;
  second_stage?: Maybe<RocketSecondStage>;
  stages?: Maybe<Scalars['Int']>;
  success_rate_pct?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
};

export type RocketEngines = {
  __typename?: 'RocketEngines';
  engine_loss_max?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  propellant_1?: Maybe<Scalars['String']>;
  propellant_2?: Maybe<Scalars['String']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_to_weight?: Maybe<Scalars['Float']>;
  thrust_vacuum?: Maybe<Force>;
  type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type RocketFirstStage = {
  __typename?: 'RocketFirstStage';
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  reusable?: Maybe<Scalars['Boolean']>;
  thrust_sea_level?: Maybe<Force>;
  thrust_vacuum?: Maybe<Force>;
};

export type RocketLandingLegs = {
  __typename?: 'RocketLandingLegs';
  material?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type RocketPayloadWeight = {
  __typename?: 'RocketPayloadWeight';
  id?: Maybe<Scalars['String']>;
  kg?: Maybe<Scalars['Int']>;
  lb?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type RocketSecondStage = {
  __typename?: 'RocketSecondStage';
  burn_time_sec?: Maybe<Scalars['Int']>;
  engines?: Maybe<Scalars['Int']>;
  fuel_amount_tons?: Maybe<Scalars['Float']>;
  payloads?: Maybe<RocketSecondStagePayloads>;
  thrust?: Maybe<Force>;
};

export type RocketSecondStagePayloadCompositeFairing = {
  __typename?: 'RocketSecondStagePayloadCompositeFairing';
  diameter?: Maybe<Distance>;
  height?: Maybe<Distance>;
};

export type RocketSecondStagePayloads = {
  __typename?: 'RocketSecondStagePayloads';
  composite_fairing?: Maybe<RocketSecondStagePayloadCompositeFairing>;
  option_1?: Maybe<Scalars['String']>;
};

export type RocketsResult = {
  __typename?: 'RocketsResult';
  data?: Maybe<Array<Maybe<Rocket>>>;
  result?: Maybe<Result>;
};

export type Ship = {
  __typename?: 'Ship';
  abs?: Maybe<Scalars['Int']>;
  active?: Maybe<Scalars['Boolean']>;
  attempted_landings?: Maybe<Scalars['Int']>;
  class?: Maybe<Scalars['Int']>;
  course_deg?: Maybe<Scalars['Int']>;
  home_port?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  imo?: Maybe<Scalars['Int']>;
  missions?: Maybe<Array<Maybe<ShipMission>>>;
  mmsi?: Maybe<Scalars['Int']>;
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<ShipLocation>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  speed_kn?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  successful_landings?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  weight_kg?: Maybe<Scalars['Int']>;
  weight_lbs?: Maybe<Scalars['Int']>;
  year_built?: Maybe<Scalars['Int']>;
};

export type ShipLocation = {
  __typename?: 'ShipLocation';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type ShipMission = {
  __typename?: 'ShipMission';
  flight?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ShipsFind = {
  abs?: InputMaybe<Scalars['Int']>;
  active?: InputMaybe<Scalars['Boolean']>;
  attempted_landings?: InputMaybe<Scalars['Int']>;
  class?: InputMaybe<Scalars['Int']>;
  course_deg?: InputMaybe<Scalars['Int']>;
  home_port?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  imo?: InputMaybe<Scalars['Int']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  mission?: InputMaybe<Scalars['String']>;
  mmsi?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  speed_kn?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  successful_landings?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<Scalars['String']>;
  weight_kg?: InputMaybe<Scalars['Int']>;
  weight_lbs?: InputMaybe<Scalars['Int']>;
  year_built?: InputMaybe<Scalars['Int']>;
};

export type ShipsResult = {
  __typename?: 'ShipsResult';
  data?: Maybe<Array<Maybe<Ship>>>;
  result?: Maybe<Result>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  _nlike?: InputMaybe<Scalars['String']>;
  _nsimilar?: InputMaybe<Scalars['String']>;
  _similar?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type SubscriptionUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type SubscriptionUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type SubscriptionUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Volume = {
  __typename?: 'Volume';
  cubic_feet?: Maybe<Scalars['Int']>;
  cubic_meters?: Maybe<Scalars['Int']>;
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp: Scalars['timestamptz'];
  twitter?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  rocket?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  twitter?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  Constraint = 'constraint',
  Key = 'key',
  Or = 'or',
  Primary = 'primary',
  Unique = 'unique',
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  rocket?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  twitter?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  name?: InputMaybe<Order_By>;
  rocket?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  name?: Maybe<Scalars['String']>;
  rocket?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  twitter?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  name?: InputMaybe<Order_By>;
  rocket?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  rocket?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  Column = 'column',
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  rocket?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  twitter?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  Column = 'column',
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Address: ResolverTypeWrapper<Address>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Capsule: ResolverTypeWrapper<Capsule>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  CapsuleMission: ResolverTypeWrapper<CapsuleMission>;
  CapsulesFind: CapsulesFind;
  Core: ResolverTypeWrapper<Core>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CoreMission: ResolverTypeWrapper<CoreMission>;
  CoresFind: CoresFind;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Distance: ResolverTypeWrapper<Distance>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Dragon: ResolverTypeWrapper<Dragon>;
  DragonHeatShield: ResolverTypeWrapper<DragonHeatShield>;
  DragonPressurizedCapsule: ResolverTypeWrapper<DragonPressurizedCapsule>;
  DragonThrust: ResolverTypeWrapper<DragonThrust>;
  DragonTrunk: ResolverTypeWrapper<DragonTrunk>;
  DragonTrunkCargo: ResolverTypeWrapper<DragonTrunkCargo>;
  Force: ResolverTypeWrapper<Force>;
  HistoriesResult: ResolverTypeWrapper<HistoriesResult>;
  History: ResolverTypeWrapper<History>;
  HistoryFind: HistoryFind;
  Info: ResolverTypeWrapper<Info>;
  InfoLinks: ResolverTypeWrapper<InfoLinks>;
  Landpad: ResolverTypeWrapper<Landpad>;
  Launch: ResolverTypeWrapper<Launch>;
  LaunchFind: LaunchFind;
  LaunchLinks: ResolverTypeWrapper<LaunchLinks>;
  LaunchRocket: ResolverTypeWrapper<LaunchRocket>;
  LaunchRocketFairings: ResolverTypeWrapper<LaunchRocketFairings>;
  LaunchRocketFirstStage: ResolverTypeWrapper<LaunchRocketFirstStage>;
  LaunchRocketFirstStageCore: ResolverTypeWrapper<LaunchRocketFirstStageCore>;
  LaunchRocketSecondStage: ResolverTypeWrapper<LaunchRocketSecondStage>;
  LaunchSite: ResolverTypeWrapper<LaunchSite>;
  LaunchTelemetry: ResolverTypeWrapper<LaunchTelemetry>;
  LaunchesPastResult: ResolverTypeWrapper<LaunchesPastResult>;
  Launchpad: ResolverTypeWrapper<Launchpad>;
  Link: ResolverTypeWrapper<Link>;
  Location: ResolverTypeWrapper<Location>;
  Mass: ResolverTypeWrapper<Mass>;
  Mission: ResolverTypeWrapper<Mission>;
  MissionResult: ResolverTypeWrapper<MissionResult>;
  MissionsFind: MissionsFind;
  Mutation: ResolverTypeWrapper<{}>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  Payload: ResolverTypeWrapper<Payload>;
  PayloadOrbitParams: ResolverTypeWrapper<PayloadOrbitParams>;
  PayloadsFind: PayloadsFind;
  Query: ResolverTypeWrapper<{}>;
  Result: ResolverTypeWrapper<Result>;
  Roadster: ResolverTypeWrapper<Roadster>;
  Rocket: ResolverTypeWrapper<Rocket>;
  RocketEngines: ResolverTypeWrapper<RocketEngines>;
  RocketFirstStage: ResolverTypeWrapper<RocketFirstStage>;
  RocketLandingLegs: ResolverTypeWrapper<RocketLandingLegs>;
  RocketPayloadWeight: ResolverTypeWrapper<RocketPayloadWeight>;
  RocketSecondStage: ResolverTypeWrapper<RocketSecondStage>;
  RocketSecondStagePayloadCompositeFairing: ResolverTypeWrapper<RocketSecondStagePayloadCompositeFairing>;
  RocketSecondStagePayloads: ResolverTypeWrapper<RocketSecondStagePayloads>;
  RocketsResult: ResolverTypeWrapper<RocketsResult>;
  Ship: ResolverTypeWrapper<Ship>;
  ShipLocation: ResolverTypeWrapper<ShipLocation>;
  ShipMission: ResolverTypeWrapper<ShipMission>;
  ShipsFind: ShipsFind;
  ShipsResult: ResolverTypeWrapper<ShipsResult>;
  String_comparison_exp: String_Comparison_Exp;
  Subscription: ResolverTypeWrapper<{}>;
  Volume: ResolverTypeWrapper<Volume>;
  conflict_action: Conflict_Action;
  order_by: Order_By;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Address: Address;
  String: Scalars['String'];
  Capsule: Capsule;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  CapsuleMission: CapsuleMission;
  CapsulesFind: CapsulesFind;
  Core: Core;
  Boolean: Scalars['Boolean'];
  CoreMission: CoreMission;
  CoresFind: CoresFind;
  Date: Scalars['Date'];
  Distance: Distance;
  Float: Scalars['Float'];
  Dragon: Dragon;
  DragonHeatShield: DragonHeatShield;
  DragonPressurizedCapsule: DragonPressurizedCapsule;
  DragonThrust: DragonThrust;
  DragonTrunk: DragonTrunk;
  DragonTrunkCargo: DragonTrunkCargo;
  Force: Force;
  HistoriesResult: HistoriesResult;
  History: History;
  HistoryFind: HistoryFind;
  Info: Info;
  InfoLinks: InfoLinks;
  Landpad: Landpad;
  Launch: Launch;
  LaunchFind: LaunchFind;
  LaunchLinks: LaunchLinks;
  LaunchRocket: LaunchRocket;
  LaunchRocketFairings: LaunchRocketFairings;
  LaunchRocketFirstStage: LaunchRocketFirstStage;
  LaunchRocketFirstStageCore: LaunchRocketFirstStageCore;
  LaunchRocketSecondStage: LaunchRocketSecondStage;
  LaunchSite: LaunchSite;
  LaunchTelemetry: LaunchTelemetry;
  LaunchesPastResult: LaunchesPastResult;
  Launchpad: Launchpad;
  Link: Link;
  Location: Location;
  Mass: Mass;
  Mission: Mission;
  MissionResult: MissionResult;
  MissionsFind: MissionsFind;
  Mutation: {};
  ObjectID: Scalars['ObjectID'];
  Payload: Payload;
  PayloadOrbitParams: PayloadOrbitParams;
  PayloadsFind: PayloadsFind;
  Query: {};
  Result: Result;
  Roadster: Roadster;
  Rocket: Rocket;
  RocketEngines: RocketEngines;
  RocketFirstStage: RocketFirstStage;
  RocketLandingLegs: RocketLandingLegs;
  RocketPayloadWeight: RocketPayloadWeight;
  RocketSecondStage: RocketSecondStage;
  RocketSecondStagePayloadCompositeFairing: RocketSecondStagePayloadCompositeFairing;
  RocketSecondStagePayloads: RocketSecondStagePayloads;
  RocketsResult: RocketsResult;
  Ship: Ship;
  ShipLocation: ShipLocation;
  ShipMission: ShipMission;
  ShipsFind: ShipsFind;
  ShipsResult: ShipsResult;
  String_comparison_exp: String_Comparison_Exp;
  Subscription: {};
  Volume: Volume;
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_aggregate_order_by: Users_Aggregate_Order_By;
  users_arr_rel_insert_input: Users_Arr_Rel_Insert_Input;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_max_order_by: Users_Max_Order_By;
  users_min_fields: Users_Min_Fields;
  users_min_order_by: Users_Min_Order_By;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_set_input: Users_Set_Input;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
}>;

export type ContactDirectiveArgs = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ContactDirectiveResolver<Result, Parent, ContextType = DataSourceContext, Args = ContactDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddressResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CapsuleResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Capsule'] = ResolversParentTypes['Capsule']> = ResolversObject<{
  dragon?: Resolver<Maybe<ResolversTypes['Dragon']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CapsuleMission']>>>, ParentType, ContextType>;
  original_launch?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  reuse_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CapsuleMissionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CapsuleMission'] = ResolversParentTypes['CapsuleMission']> = ResolversObject<{
  flight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoreResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Core'] = ResolversParentTypes['Core']> = ResolversObject<{
  asds_attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  asds_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['CapsuleMission']>>>, ParentType, ContextType>;
  original_launch?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  reuse_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rtls_attempts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rtls_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  water_landing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoreMissionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CoreMission'] = ResolversParentTypes['CoreMission']> = ResolversObject<{
  flight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type DistanceResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Distance'] = ResolversParentTypes['Distance']> = ResolversObject<{
  feet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  meters?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Dragon'] = ResolversParentTypes['Dragon']> = ResolversObject<{
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  crew_capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  dry_mass_kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  dry_mass_lb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  first_flight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  heat_shield?: Resolver<Maybe<ResolversTypes['DragonHeatShield']>, ParentType, ContextType>;
  height_w_trunk?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  launch_payload_mass?: Resolver<Maybe<ResolversTypes['Mass']>, ParentType, ContextType>;
  launch_payload_vol?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orbit_duration_yr?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pressurized_capsule?: Resolver<Maybe<ResolversTypes['DragonPressurizedCapsule']>, ParentType, ContextType>;
  return_payload_mass?: Resolver<Maybe<ResolversTypes['Mass']>, ParentType, ContextType>;
  return_payload_vol?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>;
  sidewall_angle_deg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  thrusters?: Resolver<Maybe<Array<Maybe<ResolversTypes['DragonThrust']>>>, ParentType, ContextType>;
  trunk?: Resolver<Maybe<ResolversTypes['DragonTrunk']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonHeatShieldResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DragonHeatShield'] = ResolversParentTypes['DragonHeatShield']> = ResolversObject<{
  dev_partner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size_meters?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  temp_degrees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonPressurizedCapsuleResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DragonPressurizedCapsule'] = ResolversParentTypes['DragonPressurizedCapsule']> = ResolversObject<{
  payload_volume?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonThrustResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DragonThrust'] = ResolversParentTypes['DragonThrust']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fuel_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fuel_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pods?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thrust?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonTrunkResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DragonTrunk'] = ResolversParentTypes['DragonTrunk']> = ResolversObject<{
  cargo?: Resolver<Maybe<ResolversTypes['DragonTrunkCargo']>, ParentType, ContextType>;
  trunk_volume?: Resolver<Maybe<ResolversTypes['Volume']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DragonTrunkCargoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['DragonTrunkCargo'] = ResolversParentTypes['DragonTrunkCargo']> = ResolversObject<{
  solar_array?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  unpressurized_cargo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForceResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Force'] = ResolversParentTypes['Force']> = ResolversObject<{
  kN?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lbf?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoriesResultResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['HistoriesResult'] = ResolversParentTypes['HistoriesResult']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['History']>>>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['History'] = ResolversParentTypes['History']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  event_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  event_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  flight?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['Link']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InfoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Info'] = ResolversParentTypes['Info']> = ResolversObject<{
  ceo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cto_propulsion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  employees?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  founded?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  founder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headquarters?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  launch_sites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['InfoLinks']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  test_sites?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  valuation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vehicles?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InfoLinksResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['InfoLinks'] = ResolversParentTypes['InfoLinks']> = ResolversObject<{
  elon_twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flickr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LandpadResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Landpad'] = ResolversParentTypes['Landpad']> = ResolversObject<{
  attempted_landings?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  landing_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  successful_landings?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Launch'] = ResolversParentTypes['Launch']> = ResolversObject<{
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  is_tentative?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  launch_date_local?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launch_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launch_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launch_site?: Resolver<Maybe<ResolversTypes['LaunchSite']>, ParentType, ContextType>;
  launch_success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  launch_year?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['LaunchLinks']>, ParentType, ContextType>;
  mission_id?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  mission_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['LaunchRocket']>, ParentType, ContextType>;
  ships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ship']>>>, ParentType, ContextType>;
  static_fire_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  static_fire_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  telemetry?: Resolver<Maybe<ResolversTypes['LaunchTelemetry']>, ParentType, ContextType>;
  tentative_max_precision?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  upcoming?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchLinksResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LaunchLinks'] = ResolversParentTypes['LaunchLinks']> = ResolversObject<{
  article_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flickr_images?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  mission_patch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mission_patch_small?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presskit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_campaign?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_launch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit_recovery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  video_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchRocketResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LaunchRocket'] = ResolversParentTypes['LaunchRocket']> = ResolversObject<{
  fairings?: Resolver<Maybe<ResolversTypes['LaunchRocketFairings']>, ParentType, ContextType>;
  first_stage?: Resolver<Maybe<ResolversTypes['LaunchRocketFirstStage']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType>;
  rocket_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  second_stage?: Resolver<Maybe<ResolversTypes['LaunchRocketSecondStage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchRocketFairingsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LaunchRocketFairings'] = ResolversParentTypes['LaunchRocketFairings']> = ResolversObject<{
  recovered?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  recovery_attempt?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  reused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ship?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchRocketFirstStageResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LaunchRocketFirstStage'] = ResolversParentTypes['LaunchRocketFirstStage']> = ResolversObject<{
  cores?: Resolver<Maybe<Array<Maybe<ResolversTypes['LaunchRocketFirstStageCore']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchRocketFirstStageCoreResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LaunchRocketFirstStageCore'] = ResolversParentTypes['LaunchRocketFirstStageCore']> = ResolversObject<{
  block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  core?: Resolver<Maybe<ResolversTypes['Core']>, ParentType, ContextType>;
  flight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  gridfins?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  land_success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  landing_intent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  landing_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  landing_vehicle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  legs?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  reused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchRocketSecondStageResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LaunchRocketSecondStage'] = ResolversParentTypes['LaunchRocketSecondStage']> = ResolversObject<{
  block?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  payloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payload']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchSiteResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LaunchSite'] = ResolversParentTypes['LaunchSite']> = ResolversObject<{
  site_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site_name_long?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchTelemetryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LaunchTelemetry'] = ResolversParentTypes['LaunchTelemetry']> = ResolversObject<{
  flight_club?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchesPastResultResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['LaunchesPastResult'] = ResolversParentTypes['LaunchesPastResult']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LaunchpadResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Launchpad'] = ResolversParentTypes['Launchpad']> = ResolversObject<{
  attempted_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  successful_launches?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  vehicles_launched?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rocket']>>>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = ResolversObject<{
  article?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reddit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MassResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mass'] = ResolversParentTypes['Mass']> = ResolversObject<{
  kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MissionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mission'] = ResolversParentTypes['Mission']> = ResolversObject<{
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  manufacturers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payload']>>>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MissionResultResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['MissionResult'] = ResolversParentTypes['MissionResult']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mission']>>>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<MutationDelete_UsersArgs, 'where'>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<MutationInsert_UsersArgs, 'objects'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<MutationUpdate_UsersArgs, 'where'>>;
}>;

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type PayloadResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Payload'] = ResolversParentTypes['Payload']> = ResolversObject<{
  customers?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  manufacturer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nationality?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  norad_id?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  orbit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orbit_params?: Resolver<Maybe<ResolversTypes['PayloadOrbitParams']>, ParentType, ContextType>;
  payload_mass_kg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payload_mass_lbs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payload_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reused?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PayloadOrbitParamsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PayloadOrbitParams'] = ResolversParentTypes['PayloadOrbitParams']> = ResolversObject<{
  apoapsis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  arg_of_pericenter?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  eccentricity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  epoch?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  inclination_deg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lifespan_years?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mean_anomaly?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mean_motion?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  periapsis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  period_min?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  raan?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reference_system?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  semi_major_axis_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  capsule?: Resolver<Maybe<ResolversTypes['Capsule']>, ParentType, ContextType, RequireFields<QueryCapsuleArgs, 'id'>>;
  capsules?: Resolver<Maybe<Array<Maybe<ResolversTypes['Capsule']>>>, ParentType, ContextType, Partial<QueryCapsulesArgs>>;
  capsulesPast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Capsule']>>>, ParentType, ContextType, Partial<QueryCapsulesPastArgs>>;
  capsulesUpcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Capsule']>>>, ParentType, ContextType, Partial<QueryCapsulesUpcomingArgs>>;
  company?: Resolver<Maybe<ResolversTypes['Info']>, ParentType, ContextType>;
  core?: Resolver<Maybe<ResolversTypes['Core']>, ParentType, ContextType, RequireFields<QueryCoreArgs, 'id'>>;
  cores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Core']>>>, ParentType, ContextType, Partial<QueryCoresArgs>>;
  coresPast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Core']>>>, ParentType, ContextType, Partial<QueryCoresPastArgs>>;
  coresUpcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Core']>>>, ParentType, ContextType, Partial<QueryCoresUpcomingArgs>>;
  dragon?: Resolver<Maybe<ResolversTypes['Dragon']>, ParentType, ContextType, RequireFields<QueryDragonArgs, 'id'>>;
  dragons?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dragon']>>>, ParentType, ContextType, Partial<QueryDragonsArgs>>;
  histories?: Resolver<Maybe<Array<Maybe<ResolversTypes['History']>>>, ParentType, ContextType, Partial<QueryHistoriesArgs>>;
  historiesResult?: Resolver<Maybe<ResolversTypes['HistoriesResult']>, ParentType, ContextType, Partial<QueryHistoriesResultArgs>>;
  history?: Resolver<Maybe<ResolversTypes['History']>, ParentType, ContextType, RequireFields<QueryHistoryArgs, 'id'>>;
  landpad?: Resolver<Maybe<ResolversTypes['Landpad']>, ParentType, ContextType, RequireFields<QueryLandpadArgs, 'id'>>;
  landpads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Landpad']>>>, ParentType, ContextType, Partial<QueryLandpadsArgs>>;
  launch?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, RequireFields<QueryLaunchArgs, 'id'>>;
  launchLatest?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, Partial<QueryLaunchLatestArgs>>;
  launchNext?: Resolver<Maybe<ResolversTypes['Launch']>, ParentType, ContextType, Partial<QueryLaunchNextArgs>>;
  launches?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType, Partial<QueryLaunchesArgs>>;
  launchesPast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType, Partial<QueryLaunchesPastArgs>>;
  launchesPastResult?: Resolver<Maybe<ResolversTypes['LaunchesPastResult']>, ParentType, ContextType, Partial<QueryLaunchesPastResultArgs>>;
  launchesUpcoming?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launch']>>>, ParentType, ContextType, Partial<QueryLaunchesUpcomingArgs>>;
  launchpad?: Resolver<Maybe<ResolversTypes['Launchpad']>, ParentType, ContextType, RequireFields<QueryLaunchpadArgs, 'id'>>;
  launchpads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Launchpad']>>>, ParentType, ContextType, Partial<QueryLaunchpadsArgs>>;
  mission?: Resolver<Maybe<ResolversTypes['Mission']>, ParentType, ContextType, RequireFields<QueryMissionArgs, 'id'>>;
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mission']>>>, ParentType, ContextType, Partial<QueryMissionsArgs>>;
  missionsResult?: Resolver<Maybe<ResolversTypes['MissionResult']>, ParentType, ContextType, Partial<QueryMissionsResultArgs>>;
  payload?: Resolver<Maybe<ResolversTypes['Payload']>, ParentType, ContextType, RequireFields<QueryPayloadArgs, 'id'>>;
  payloads?: Resolver<Maybe<Array<Maybe<ResolversTypes['Payload']>>>, ParentType, ContextType, Partial<QueryPayloadsArgs>>;
  roadster?: Resolver<Maybe<ResolversTypes['Roadster']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['Rocket']>, ParentType, ContextType, RequireFields<QueryRocketArgs, 'id'>>;
  rockets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rocket']>>>, ParentType, ContextType, Partial<QueryRocketsArgs>>;
  rocketsResult?: Resolver<Maybe<ResolversTypes['RocketsResult']>, ParentType, ContextType, Partial<QueryRocketsResultArgs>>;
  ship?: Resolver<Maybe<ResolversTypes['Ship']>, ParentType, ContextType, RequireFields<QueryShipArgs, 'id'>>;
  ships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ship']>>>, ParentType, ContextType, Partial<QueryShipsArgs>>;
  shipsResult?: Resolver<Maybe<ResolversTypes['ShipsResult']>, ParentType, ContextType, Partial<QueryShipsResultArgs>>;
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, Partial<QueryUsers_AggregateArgs>>;
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<QueryUsers_By_PkArgs, 'id'>>;
}>;

export type ResultResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = ResolversObject<{
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RoadsterResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Roadster'] = ResolversParentTypes['Roadster']> = ResolversObject<{
  apoapsis_au?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  details?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  earth_distance_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  earth_distance_mi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  eccentricity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  epoch_jd?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  inclination?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  launch_date_unix?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launch_date_utc?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  launch_mass_kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  launch_mass_lbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mars_distance_km?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mars_distance_mi?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  norad_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  orbit_type?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  periapsis_arg?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  periapsis_au?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  period_days?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  semi_major_axis_au?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  speed_kph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  speed_mph?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Rocket'] = ResolversParentTypes['Rocket']> = ResolversObject<{
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  boosters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cost_per_launch?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  diameter?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  engines?: Resolver<Maybe<ResolversTypes['RocketEngines']>, ParentType, ContextType>;
  first_flight?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  first_stage?: Resolver<Maybe<ResolversTypes['RocketFirstStage']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  landing_legs?: Resolver<Maybe<ResolversTypes['RocketLandingLegs']>, ParentType, ContextType>;
  mass?: Resolver<Maybe<ResolversTypes['Mass']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload_weights?: Resolver<Maybe<Array<Maybe<ResolversTypes['RocketPayloadWeight']>>>, ParentType, ContextType>;
  second_stage?: Resolver<Maybe<ResolversTypes['RocketSecondStage']>, ParentType, ContextType>;
  stages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  success_rate_pct?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikipedia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketEnginesResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['RocketEngines'] = ResolversParentTypes['RocketEngines']> = ResolversObject<{
  engine_loss_max?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  layout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  propellant_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  propellant_2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thrust_sea_level?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  thrust_to_weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  thrust_vacuum?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketFirstStageResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['RocketFirstStage'] = ResolversParentTypes['RocketFirstStage']> = ResolversObject<{
  burn_time_sec?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  engines?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fuel_amount_tons?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  reusable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  thrust_sea_level?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  thrust_vacuum?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketLandingLegsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['RocketLandingLegs'] = ResolversParentTypes['RocketLandingLegs']> = ResolversObject<{
  material?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketPayloadWeightResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['RocketPayloadWeight'] = ResolversParentTypes['RocketPayloadWeight']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketSecondStageResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['RocketSecondStage'] = ResolversParentTypes['RocketSecondStage']> = ResolversObject<{
  burn_time_sec?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  engines?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fuel_amount_tons?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  payloads?: Resolver<Maybe<ResolversTypes['RocketSecondStagePayloads']>, ParentType, ContextType>;
  thrust?: Resolver<Maybe<ResolversTypes['Force']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketSecondStagePayloadCompositeFairingResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['RocketSecondStagePayloadCompositeFairing'] = ResolversParentTypes['RocketSecondStagePayloadCompositeFairing']> = ResolversObject<{
  diameter?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Distance']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketSecondStagePayloadsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['RocketSecondStagePayloads'] = ResolversParentTypes['RocketSecondStagePayloads']> = ResolversObject<{
  composite_fairing?: Resolver<Maybe<ResolversTypes['RocketSecondStagePayloadCompositeFairing']>, ParentType, ContextType>;
  option_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RocketsResultResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['RocketsResult'] = ResolversParentTypes['RocketsResult']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Rocket']>>>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Ship'] = ResolversParentTypes['Ship']> = ResolversObject<{
  abs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  attempted_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  course_deg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  home_port?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imo?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  missions?: Resolver<Maybe<Array<Maybe<ResolversTypes['ShipMission']>>>, ParentType, ContextType>;
  mmsi?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['ShipLocation']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  speed_kn?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  successful_landings?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight_kg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  weight_lbs?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  year_built?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipLocationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ShipLocation'] = ResolversParentTypes['ShipLocation']> = ResolversObject<{
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipMissionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ShipMission'] = ResolversParentTypes['ShipMission']> = ResolversObject<{
  flight?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShipsResultResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ShipsResult'] = ResolversParentTypes['ShipsResult']> = ResolversObject<{
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ship']>>>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, Partial<SubscriptionUsersArgs>>;
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, Partial<SubscriptionUsers_AggregateArgs>>;
  users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "users_by_pk", ParentType, ContextType, RequireFields<SubscriptionUsers_By_PkArgs, 'id'>>;
}>;

export type VolumeResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Volume'] = ResolversParentTypes['Volume']> = ResolversObject<{
  cubic_feet?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cubic_meters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type UsersResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = ResolversObject<{
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Users_AggregateResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Users_Aggregate_FieldsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = ResolversObject<{
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<Users_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Users_Max_FieldsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Users_Min_FieldsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rocket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Users_Mutation_ResponseResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = DataSourceContext> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  Capsule?: CapsuleResolvers<ContextType>;
  CapsuleMission?: CapsuleMissionResolvers<ContextType>;
  Core?: CoreResolvers<ContextType>;
  CoreMission?: CoreMissionResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Distance?: DistanceResolvers<ContextType>;
  Dragon?: DragonResolvers<ContextType>;
  DragonHeatShield?: DragonHeatShieldResolvers<ContextType>;
  DragonPressurizedCapsule?: DragonPressurizedCapsuleResolvers<ContextType>;
  DragonThrust?: DragonThrustResolvers<ContextType>;
  DragonTrunk?: DragonTrunkResolvers<ContextType>;
  DragonTrunkCargo?: DragonTrunkCargoResolvers<ContextType>;
  Force?: ForceResolvers<ContextType>;
  HistoriesResult?: HistoriesResultResolvers<ContextType>;
  History?: HistoryResolvers<ContextType>;
  Info?: InfoResolvers<ContextType>;
  InfoLinks?: InfoLinksResolvers<ContextType>;
  Landpad?: LandpadResolvers<ContextType>;
  Launch?: LaunchResolvers<ContextType>;
  LaunchLinks?: LaunchLinksResolvers<ContextType>;
  LaunchRocket?: LaunchRocketResolvers<ContextType>;
  LaunchRocketFairings?: LaunchRocketFairingsResolvers<ContextType>;
  LaunchRocketFirstStage?: LaunchRocketFirstStageResolvers<ContextType>;
  LaunchRocketFirstStageCore?: LaunchRocketFirstStageCoreResolvers<ContextType>;
  LaunchRocketSecondStage?: LaunchRocketSecondStageResolvers<ContextType>;
  LaunchSite?: LaunchSiteResolvers<ContextType>;
  LaunchTelemetry?: LaunchTelemetryResolvers<ContextType>;
  LaunchesPastResult?: LaunchesPastResultResolvers<ContextType>;
  Launchpad?: LaunchpadResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Mass?: MassResolvers<ContextType>;
  Mission?: MissionResolvers<ContextType>;
  MissionResult?: MissionResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ObjectID?: GraphQLScalarType;
  Payload?: PayloadResolvers<ContextType>;
  PayloadOrbitParams?: PayloadOrbitParamsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Roadster?: RoadsterResolvers<ContextType>;
  Rocket?: RocketResolvers<ContextType>;
  RocketEngines?: RocketEnginesResolvers<ContextType>;
  RocketFirstStage?: RocketFirstStageResolvers<ContextType>;
  RocketLandingLegs?: RocketLandingLegsResolvers<ContextType>;
  RocketPayloadWeight?: RocketPayloadWeightResolvers<ContextType>;
  RocketSecondStage?: RocketSecondStageResolvers<ContextType>;
  RocketSecondStagePayloadCompositeFairing?: RocketSecondStagePayloadCompositeFairingResolvers<ContextType>;
  RocketSecondStagePayloads?: RocketSecondStagePayloadsResolvers<ContextType>;
  RocketsResult?: RocketsResultResolvers<ContextType>;
  Ship?: ShipResolvers<ContextType>;
  ShipLocation?: ShipLocationResolvers<ContextType>;
  ShipMission?: ShipMissionResolvers<ContextType>;
  ShipsResult?: ShipsResultResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Volume?: VolumeResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = DataSourceContext> = ResolversObject<{
  contact?: ContactDirectiveResolver<any, any, ContextType>;
}>;
