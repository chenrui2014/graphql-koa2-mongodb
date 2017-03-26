import {
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql'

import {UserModel, UserType, UserInput} from './models';

const UserCreate = {
    type: GraphQLBoolean,
    args:{
        data: {
            name: 'data',
            type: new GraphQLNonNull(UserInput)
        }
    },
    async resolve (root,params, options) {
        const userModel = new UserModel(params.data);
        const newUser = await userModel.save();

        if(!newUser) {
            throw new Error('Error create new user')
        }
        return true
    }
};

export default {
    UserCreate: UserCreate
}