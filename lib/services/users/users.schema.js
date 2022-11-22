"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userQueryResolver = exports.userQueryValidator = exports.userQuerySchema = exports.userQueryProperties = exports.userDataResolver = exports.userDataValidator = exports.userDataSchema = exports.userExternalResolver = exports.userResolver = exports.userSchema = void 0;
const schema_1 = require("@feathersjs/schema");
const typebox_1 = require("@feathersjs/typebox");
const authentication_local_1 = require("@feathersjs/authentication-local");
const validators_1 = require("../../schemas/validators");
// Main data model schema
exports.userSchema = typebox_1.Type.Object({
    id: typebox_1.Type.Number(),
    username: typebox_1.Type.String(),
    email: typebox_1.Type.String(),
    emailVerified: typebox_1.Type.Optional(typebox_1.Type.Boolean()),
    password: typebox_1.Type.Optional(typebox_1.Type.String()),
    googleId: typebox_1.Type.Optional(typebox_1.Type.String()),
    facebookId: typebox_1.Type.Optional(typebox_1.Type.String()),
    twitterId: typebox_1.Type.Optional(typebox_1.Type.String()),
    countryCode: typebox_1.Type.Optional(typebox_1.Type.String()),
    profilePic: typebox_1.Type.Optional(typebox_1.Type.String()),
    conventions: typebox_1.Type.Optional(typebox_1.Type.String()),
    status: typebox_1.Type.Optional(typebox_1.Type.Integer()),
    stars: typebox_1.Type.Optional(typebox_1.Type.Integer()),
    followers: typebox_1.Type.Optional(typebox_1.Type.Integer()),
    following: typebox_1.Type.Optional(typebox_1.Type.Integer()),
    createdAt: typebox_1.Type.Number(),
    updatedAt: typebox_1.Type.Number()
}, { $id: 'User', additionalProperties: false });
exports.userResolver = (0, schema_1.resolve)({
    properties: {}
});
exports.userExternalResolver = (0, schema_1.resolve)({
    properties: {
        // The password should never be visible externally
        password: async () => undefined
    }
});
// Schema for the basic data model (e.g. creating new entries)
exports.userDataSchema = typebox_1.Type.Pick(exports.userSchema, ['username', 'email', 'password', 'googleId', 'facebookId', 'twitterId', 'countryCode'], { $id: 'UserData', additionalProperties: false });
exports.userDataValidator = (0, typebox_1.getDataValidator)(exports.userDataSchema, validators_1.dataValidator);
exports.userDataResolver = (0, schema_1.resolve)({
    properties: {
        password: (0, authentication_local_1.passwordHash)({ strategy: 'local' })
    }
});
// Schema for allowed query properties
exports.userQueryProperties = typebox_1.Type.Pick(exports.userSchema, [
    'id',
    'username',
    'email',
    'googleId',
    'facebookId',
    'twitterId',
    'countryCode',
    'status'
]);
exports.userQuerySchema = (0, typebox_1.querySyntax)(exports.userQueryProperties);
exports.userQueryValidator = (0, typebox_1.getValidator)(exports.userQuerySchema, validators_1.queryValidator);
exports.userQueryResolver = (0, schema_1.resolve)({
    properties: {
        // If there is a user (e.g. with authentication), they are only allowed to see their own data
        id: async (value, user, context) => {
            if (context.params.user) {
                return context.params.user.id;
            }
            return value;
        }
    }
});
