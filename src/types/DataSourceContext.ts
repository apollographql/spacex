import API from "../api";

//This interface is used with graphql-codegen to generate types for resolvers context
export interface DataSourceContext {
  auth?: string;
  api: API;
}
