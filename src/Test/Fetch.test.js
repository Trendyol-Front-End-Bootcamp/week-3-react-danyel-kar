import {fetchItems, searchItems} from '../Services/Fetch'


describe('fetch items', ()=>{

    test('check not null', async() => {
        const result = await fetchItems()
        expect(result).not.toBeNull();
    });

      test('check size of results', async() => {
        const result = await fetchItems()
        const resultsLength = result.length;
        expect(resultsLength).toBe(20);
    });
})

describe('search items', ()=>{

    test('check not empty search bar', async() => {
        const result = await searchItems()
        expect(result).not.toBeNull();
    });

    test('check not empty search bar', async() => {
        const searchCharacter ="Rick";
        const result = await searchItems(searchCharacter)
        expect(result[0].name).toContain(searchCharacter);
    });
    
})