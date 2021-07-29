import {fetchItems, getFilterItems, searchItems} from '../Services/Fetch'


describe('fetch items', ()=>{

    it('check not null', async() => {
        const result = await fetchItems()
        expect(result).not.toBeNull();
    });

    it('check size of results', async() => {
        const result = await fetchItems()
        // console.log(result);
        // const info = result.info;
        // expect(info).toHaveProperty("pages");
        const resultsLength = result.length;
        expect(resultsLength).toBe(20);
    });
})

describe('search items', ()=>{

    it('check not empty search bar', async() => {
        const result = await searchItems()
        expect(result).not.toBeNull();
    });

    it('check if first item searched', async() => {
        const searchCharacter ="Rick";
        const result = await searchItems(searchCharacter)
        result.forEach(element=> {
             expect(element.name).toContain(searchCharacter);
        })
    }); 
})

describe('filter items', ()=>{

    it('check  for empty gender and status', async() => {
        const result = await getFilterItems("", "")
        expect(result).not.toBeNull();
    });

    it('check not empty filter status', async() => {
        const result = await getFilterItems("Alive", "")
        result.forEach(element => {
            expect(element.status).toBe("Alive");
        });
    });

    it('check not empty filter gender', async() => {
        const result = await getFilterItems("", "Male")
        result.forEach(element => {
            expect(element.gender).toBe("Male");
        });
    });
})