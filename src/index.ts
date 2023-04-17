import { readFileSync } from "fs";
import gql from "graphql-tag";
import { ApolloServer, ContextFunction } from "@apollo/server";
import {
  StandaloneServerContextFunctionArgument,
  startStandaloneServer,
} from "@apollo/server/standalone";
import responseCachePlugin from '@apollo/server-plugin-response-cache';
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';

const port = process.env.PORT ?? "4001";
import resolvers from "./resolvers";
const subgraphName = require("../package.json").name;
import { DataSourceContext } from "./types/DataSourceContext";
import API from "./api";

const context: ContextFunction<
  [StandaloneServerContextFunctionArgument],
  DataSourceContext
> = async ({ req }) => ({
  api: new API(),
});

async function main() {
  let typeDefs = gql(
    readFileSync("schema.graphql", {
      encoding: "utf-8",
    })
  );
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    plugins: [
      ApolloServerPluginCacheControl({ defaultMaxAge: 86400 }),
      responseCachePlugin(),
      {
        async serverWillStart() {
          return {
            async renderLandingPage() {
              const html = `
              <!DOCTYPE html>
              <meta http-equiv="Refresh" content="0; url='https://studio.apollographql.com/public/SpaceX-pxxbxen/explorer?variant=current'" />`;
              return { html };
            },
          };
        },
      },
    ],
  });
  const { url } = await startStandaloneServer(server, {
    context,
    listen: { port: Number.parseInt(port) },
  });

  console.log(`🚀  Subgraph ${subgraphName} ready at ${url}`);
  console.log(`Run 'rover dev --url ${url} --name ${subgraphName}`);
}

main();
