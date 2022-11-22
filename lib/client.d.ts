import type { TransportConnection, Params } from '@feathersjs/feathers';
import type { AuthenticationService } from '@feathersjs/authentication';
import type { User, UserData, UserQuery, UserService } from './services/users/users';
export type { User, UserData, UserQuery };
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
declare const userServiceMethods: readonly ["find", "get", "create", "update", "patch", "remove"];
declare type UserClientService = Pick<UserService<Params<UserQuery>>, typeof userServiceMethods[number]>;
export interface ServiceTypes {
    authentication: Pick<AuthenticationService, 'create' | 'remove'>;
    users: UserClientService;
}
/**
 * Returns a typed client for the jb1d.dove app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export declare const createClient: <Configuration = any>(connection: TransportConnection<ServiceTypes>, authenticationOptions?: Partial<AuthenticationClientOptions>) => import("@feathersjs/feathers").Application<ServiceTypes, Configuration>;
