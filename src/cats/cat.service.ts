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
}
