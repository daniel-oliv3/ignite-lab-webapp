import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r0oknz0et501z52qv1awsn/master',
    cache: new InMemoryCache()
})