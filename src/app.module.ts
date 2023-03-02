import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { CatModule } from './cats/cat.module';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/graphql.ts'),
                outputAs: 'class',
            },
        }),
        CatModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
