import { JoinDto } from '../graphql';

export class CatService {
    public getOne(id: number) {
        return {
            id: 1,
            name: '냥',
            age: '29',
        };
    }

    public getAllCats() {
        return [
            {
                id: 1,
                name: '냥',
                age: '29',
            },
            {
                id: 2,
                name: '냐앙',
                age: null,
            },
        ];
    }

    join(joinDto: JoinDto) {
        const { email, password } = joinDto;
        console.log(email);
        console.log(password);
        return 'a';
    }
}
