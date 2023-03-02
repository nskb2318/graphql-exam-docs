import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { JoinDto } from '../graphql';
import { Res } from '@nestjs/common';
import { Response } from 'express';

@Resolver('Cat')
export class CatResolver {
    constructor(private readonly catService: CatService) {}

    /**
     * # Write your query or mutation here
     * query {
     *   getOneCat(id: 1) {
     *     id, name, age
     *   }
     * }
     */
    @Query()
    async getOneCat(@Args('id') id: number): Promise<any> {
        // throw new UnauthorizedException('알 수 없는 에러');
        return this.catService.getOne(id);
    }
    @Query()
    async getAllCats(): Promise<any> {
        return this.catService.getAllCats();
    }

    /**
     * mutation {
     * 	joinCat(joinDto: {
     *     email: "foo@block.io", password: "fooo"
     *   })
     * }
     */
    //post 예제
    @Mutation('joinCat')
    async joinCat(
        @Args('joinDto') joinDto: JoinDto,
        @Context() context: { req: Request },
        @Res() res: Response,
    ): Promise<any> {
        const headers: any = context.req.headers;
        const authorization = headers.authorization;
        console.log(authorization);
        res.cookie('refresh-token', 'aaa', {
            httpOnly: true,
            secure: true,
        });

        return this.catService.join(joinDto);
    }
}
