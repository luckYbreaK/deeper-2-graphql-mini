// equivalent to express
const { GraphQLServer } = require("graphql-yoga");

// type definitions
const typeDefs = `
    type Query {
        helloworld: String!
        articles: [Article!]!
    }

    type Mutation {
        addArticle(title: String!, url: String!, description: String): Article!
    }

    type Article {
        id: String!
        url: String!
        title: String!
        description: String
    }
`

const articles = [
    {
        url: "www.google.com",
        title: "Search for this, yo",
        id: "link-0",
    },
    {
        url: "www.today.com",
        title: "Learn about yourself",
        id: "link-1",
    },
    {
        url: "www.tomorrow.com",
        title: "Improve yourself",
        id: "link-2",
    }
]

// execution or handler of typeDefs; these are the controllers
const resolvers = {
    Query: {
        //the return is the same as res.send
        helloworld: () => "Hello, we are graphqling",
        //articles: async () => await db.getArticles
        articles: () => articles
    },
    Mutation: {
        addArticle: (context, args) => {
            const { title, url, description } = args;
            const newItem = {
                title,
                url,
                description,
                id: "link-"+articles.length
            }
            articles.push(newItem);
            return newItem;
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

// start server
server.start(() => console.log(`Graphql server running on 4000`));

