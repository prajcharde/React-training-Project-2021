import axios from "axios";
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import {
    fetchCard, 
    fetchCards, 
    fetchCardFilter, 
    adminUpdateCard, 
    adminAddCard, 
    updateCardCount
} from "./index";
import { FETCH_CARDS, FETCH_CARD, FETCH_CARD_FILTER, ADMIN_ADD_CARD, UPDATE_CARD_COUNT, ADMIN_UPDATE_CARD } from './types';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('All gifts actions', function description() {
    it ("On fetchCards Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.get.mockResolvedValueOnce({data:[{ id: 1, name: "iphone" }], headers:{"x-total-count": 1}})
        const expectedAction = [
            {
                type: FETCH_CARDS,
                payload: {data:[{ id: 1, name: "iphone" }], totalCount : 1}
            }
        ]
        await store.dispatch(fetchCards(1,3));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })

    it ("On fetchCard Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.get.mockResolvedValueOnce({ id: 1, name: "iphone" })
        const expectedAction = [
            {
                type: FETCH_CARD,
                payload: { id: 1, name: "iphone" }
            }
        ]
        await store.dispatch(fetchCard(1));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })


    it ("On adminUpdateCard Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.patch.mockResolvedValueOnce({ id: 1, name: "iphone" })
        const expectedAction = [
            {
                type: ADMIN_UPDATE_CARD,
                payload: { id: 1, name: "iphone" }
            }
        ]
        await store.dispatch(adminUpdateCard(1,{ id: 1, name: "amazon" }));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })

    it ("On fetchCardFilter Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        const expectedAction = [
            {
                type: FETCH_CARD_FILTER,
                payload: { id: 1, name: "amazon" }
            }
        ]
        await store.dispatch(fetchCardFilter({id: 1, name: "amazon" }));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })

    it ("On updateCardCount Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.patch.mockResolvedValueOnce({data:{ id: 1, name: "iphone", cardCount:2 }})
        const expectedAction = [
            {
                type: UPDATE_CARD_COUNT,
                payload: { id: 1, name: "iphone", cardCount:2 }
            }
        ]
        await store.dispatch(updateCardCount(1,1));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })

    it ("On adminAddCard Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.post.mockResolvedValueOnce({data:{ id: 1, name: "food Panda" }})
        const expectedAction = [
            {
                type: ADMIN_ADD_CARD,
                payload: { id: 1, name: "food Panda" }
            }
        ]
        await store.dispatch(adminAddCard({ id: 1, name: "food Panda" }));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })

});