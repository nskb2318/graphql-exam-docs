
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Cat {
    id: number;
    name: string;
    age?: Nullable<string>;
}

export abstract class IQuery {
    abstract getAllCats(): Nullable<Nullable<Cat>[]> | Promise<Nullable<Nullable<Cat>[]>>;

    abstract getOneCat(id: number): Nullable<Cat> | Promise<Nullable<Cat>>;
}

type Nullable<T> = T | null;
