import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatModule } from './cats/cat.module';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/graphql.ts'),
                outputAs: 'class',
            },
            context: ({ req, connection }) => {
                if (req) {
                    const user = req.headers.authorization;
                    return { ...req, user };
                } else {
                    return connection;
                }
            },
        }),
        CatModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
