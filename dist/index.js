import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from "fs";
import path from "path";
import { gql } from "graphql-tag";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql(readFileSync(path.resolve("./schema.graphqls"), {
    encoding: "utf-8",
}));
async function startApolloServer() {
    const server = new ApolloServer({ typeDefs });
    const { url } = await startStandaloneServer(server);
    console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}
startApolloServer();
// const lines: string[] = typeDefs.split(/\r?\n/);
// for (const line of lines) {
//   console.log(line.trim());
// }
