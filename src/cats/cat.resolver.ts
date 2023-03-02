import { Args, Query, Resolver } from '@nestjs/graphql';
import { CatService } from "./cat.service";

@Resolver('Cat')
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  // @Query()
  // async getOneCat(@Args('id') id: number): Promise<any> {
  //   return this.catService.getOne(id);
  // }

  @Query()
  async getAllCats(): Promise<any> {
    return this.catService.getAllCats();
  }
}
