import { fetchItems, getFilterItems, searchItems } from '../Services/Fetch';
import { jest } from '@jest/globals';
import axios from 'axios';
import {MockFetchApiData, MockSearchApiData, MockStatusAliveApiData,MockGenderMaleApiData} from '../Data/MocData';

jest.mock("axios")

describe('fetch items', () => {

    axios.get.mockResolvedValue(MockFetchApiData);

    it('check not null', async () => {
        const result = await fetchItems()
        expect(result).not.toBeNull();
    });

    it('check size of results', async () => {
        const result = await fetchItems()
        const resultsLength = result.length;
        expect(resultsLength).toBe(1);
    });
})

describe('search items', () => {

    axios.get.mockResolvedValue(MockSearchApiData);

    it('check not empty search bar', async () => {
        const result = await searchItems("Morty")
        console.log(result);
        expect(result).not.toBeNull();
    });

    it('check if first item searched', async () => {
        const searchCharacter = "Morty";
        const result = await searchItems(searchCharacter)
        result.forEach(element => {
            expect(element.name).toContain(searchCharacter);
        })
    });
})

describe('filter items', () => {
    
    it('check  for empty gender and status', async () => {
        const result = await getFilterItems("", "")
        expect(result).not.toBeNull();
    });

    it('check not empty filter status', async () => {
        axios.get.mockResolvedValue(MockStatusAliveApiData);
        const result = await getFilterItems("Alive", "")
        console.log(result);
        result.forEach(element => {
            expect(element.status).toBe("Alive");
        });
    });

    it('check not empty filter gender', async () => {
        axios.get.mockResolvedValue(MockGenderMaleApiData);
        const result = await getFilterItems("", "Male")
        console.log(result);
        result.forEach(element => {
            expect(element.gender).toBe("Male");
        });
    });
})