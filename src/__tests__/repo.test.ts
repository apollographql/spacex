import { ApolloServer, ContextFunction } from "@apollo/server";
import { readFileSync } from "fs";
import gql from "graphql-tag";
import resolvers from "../resolvers";
import { buildSubgraphSchema } from "@apollo/subgraph";
import {
  StandaloneServerContextFunctionArgument,
} from "@apollo/server/standalone";
import { DataSourceContext } from "../types/DataSourceContext";
import API from "../api";

const context: ContextFunction<
  [StandaloneServerContextFunctionArgument],
  DataSourceContext
> = async ({ req }) => ({
  api: new API(),
});

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs: gql(
      readFileSync("schema.graphql", {
        encoding: "utf-8",
      })
    ),
    resolvers,
  }),
});

describe("Repository Template Functionality", () => {
  it("Executes Location Entity Resolver", async () => {
    //Arrange
    const query = `query Capsules {
      capsules {
        id
      }
    }`;
    const variables = {
      representations: [{ __typename: "Thing", id: "1" }],
    };
    const expected = { 
      id: "5e9e2c5bf35918ed873b2664",
    };
    //Act
    const res = await server.executeOperation(
      {
        query,
        variables,
      },
      { contextValue: { api: new API() } }
    );
    //Assert
    expect(res.body.kind).toEqual("single");
    expect((res.body as any).singleResult.data.capsules[0]).toEqual(expected);
  });
});
