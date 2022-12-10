import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'
import { passwordHash } from '@feathersjs/authentication-local'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'

// Main data model schema
export const userSchema = Type.Object(
  {
    id: Type.Number(),
    username: Type.String(),
    email: Type.String(),
    emailVerified: Type.Optional(Type.Boolean()),
    password: Type.Optional(Type.String()),
    googleId: Type.Optional(Type.String()),
    facebookId: Type.Optional(Type.String()),
    twitterId: Type.Optional(Type.String()),
    realname: Type.Optional(Type.String()),
    countryCode: Type.Optional(Type.String()),
    profilePic: Type.Optional(Type.String()),
    conventions: Type.Optional(Type.String()),
    status: Type.Optional(Type.Integer()),
    stars: Type.Optional(Type.Integer()),
    followers: Type.Optional(Type.Integer()),
    following: Type.Optional(Type.Integer()),
    createdAt: Type.Number(),
    updatedAt: Type.Number()
  },
  { $id: 'User', additionalProperties: false }
)
export type User = Static<typeof userSchema>
export const userResolver = resolve<User, HookContext>({
  properties: {}
})

export const userExternalResolver = resolve<User, HookContext>({
  properties: {
    // The password should never be visible externally
    password: async () => undefined
  }
})

// Schema for the basic data model (e.g. creating new entries)
export const userDataSchema = Type.Pick(
  userSchema,
  ['username', 'email', 'password', 'googleId', 'facebookId', 'twitterId', 'realname', 'countryCode'],
  { $id: 'UserData', additionalProperties: false }
)
export type UserData = Static<typeof userDataSchema>
export const userDataValidator = getDataValidator(userDataSchema, dataValidator)
export const userDataResolver = resolve<User, HookContext>({
  properties: {
    password: passwordHash({ strategy: 'local' })
  }
})

// Schema for allowed query properties
export const userQueryProperties = Type.Pick(userSchema, [
  'id',
  'username',
  'email',
  'googleId',
  'facebookId',
  'twitterId',
  'realname',
  'countryCode',
  'status'
])
export const userQuerySchema = querySyntax(userQueryProperties)
export type UserQuery = Static<typeof userQuerySchema>
export const userQueryValidator = getValidator(userQuerySchema, queryValidator)
export const userQueryResolver = resolve<UserQuery, HookContext>({
  properties: {
    // If there is a user (e.g. with authentication), they are only allowed to see their own data
    id: async (value, user, context) => {
      if (context.params.user) {
        return context.params.user.id
      }

      return value
    }
  }
})
