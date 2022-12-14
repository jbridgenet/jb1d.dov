import { HookContext as FeathersHookContext, NextFunction } from '@feathersjs/feathers';
import { Application as FeathersApplication } from '@feathersjs/koa';
import { ApplicationConfiguration } from './schemas/configuration';
import { User } from './services/users/users';
export { NextFunction };
export interface Configuration extends ApplicationConfiguration {
}
export interface ServiceTypes {
}
export declare type Application = FeathersApplication<ServiceTypes, Configuration>;
export declare type HookContext<S = any> = FeathersHookContext<Application, S>;
declare module '@feathersjs/feathers' {
    interface Params {
        user?: User;
    }
}
