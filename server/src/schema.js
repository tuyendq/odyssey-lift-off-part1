const gql = require("graphql-tag");

const typeDefs = gql`
    # Schema definitions go here
    "A track is a group of Modules"
    type Track {
        # Fields go here
        id: ID!
        "The track's title"
        title: String!
        "The track's main author"
        author: Author!
        "The track's main illustration in track card or page details"
        thumbnail: String
        "The track approximate length to complete, in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
    }

    "Author of a complete Track or Module"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture url"
        photo: String
    }

    type Query {
        # Fields go here
        "Get tracks array for homepage grid"
        tracksForHome: [Track!]!
    }

    type SpaceCat {
        id: ID!
        name: String!
        age: Int
        missions: [Mission]
    }

    type Mission {
        id: ID!
        name: String!
        description: String!
    }

    type Query {
        spaceCats: [SpaceCat]
    }

`;

module.exports = typeDefs;

