
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class JoinDto {
    email: string;
    password: string;
}

export class Cat {
    __typename?: 'Cat';
    id: number;
    name: string;
    age?: Nullable<string>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract getAllCats(): Nullable<Nullable<Cat>[]> | Promise<Nullable<Nullable<Cat>[]>>;

    abstract getOneCat(id: number): Nullable<Cat> | Promise<Nullable<Cat>>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract joinCat(joinDto?: Nullable<JoinDto>): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
