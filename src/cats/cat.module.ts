import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatResolver } from './cat.resolver';

@Module({
    imports: [],
    providers: [CatService, CatResolver],
})
export class CatModule {}
