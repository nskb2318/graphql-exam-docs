import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { JoinDto } from '../graphql';

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
    async joinCat(@Args('joinDto') joinDto: JoinDto): Promise<any> {
        return this.catService.join(joinDto);
    }
}
