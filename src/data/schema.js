import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import UserQueries from './user/queries'
import UserMutations from './user/mutations'


export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Queries',
        fields: UserQueries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutations',
        fields: UserMutations
    }),
})