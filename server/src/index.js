
const { addMocksToSchema } = require("@graphql-tools/mock")
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");

async function startApolloServer() {
    const mocks = {
        Query: () => ({
            tracksForHome: () => [...new Array(6)],
        }),
        Track: () => ({
            id: () => "track_01",
            title: () => "Astro Kitty, Space Explorer",
            author: () => {
                return {
                    name: "Grummy Cat",
                    photo: "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
                }
            },
            thumbnail: () =>       "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
            length: () => 1210,
            modulesCount: () => 6,
        }),
        SpaceCat: () => ({
            id: () => "spacecat_01",
            title: () => "spacecat pioneer",
        }),
    };
    const server = new ApolloServer({ 
        schema: addMocksToSchema({
            schema: makeExecutableSchema({ typeDefs }),
            mocks,
        }),
    });
    const { url } = await startStandaloneServer(server);
    console.log(`
        🚀 Server is running!
        📭 Query at ${url}
    `);
}

startApolloServer();

