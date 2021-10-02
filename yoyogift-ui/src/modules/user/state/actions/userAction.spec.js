import axios from "axios";
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import {
userDetails, fetchReceivedCards, fetchSentCards, redeemCard
} from "./index";
import { SENT_CARDS, RECEIVED_CARDS, USER_DETAILS, REDEEM_CARD } from "./types";

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('All user actions', function description() {
    it ("On fetchReceivedCards Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.get.mockResolvedValueOnce({data:[{ id: 1, name: "food panda" },{ id: 1, name: "amazon" }], headers:{"x-total-count": 10}})
        const expectedAction = [
            {
                type: RECEIVED_CARDS,
                payload: {data:[{ id: 1, name: "food panda" },{ id: 1, name: "amazon" }], totalCount : 10}
            }
        ]
        await store.dispatch(fetchReceivedCards(1,2));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })

    it ("On fetchSentCards Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.get.mockResolvedValueOnce({data:[{ id: 1, name: "food panda" },{ id: 1, name: "amazon" }], headers:{"x-total-count": 10}})
        const expectedAction = [
            {
                type: SENT_CARDS,
                payload: {data:[{ id: 1, name: "food panda" },{ id: 1, name: "amazon" }], totalCount: 10}
            }
        ]
        await store.dispatch(fetchSentCards(1, 2));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })


    it ("On userDetails Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.get.mockResolvedValueOnce({data:{ id: 1, name: "user1" }})
        const expectedAction = [
            {
                type: USER_DETAILS,
                payload: { id: 1, name: "user1" }
            }
        ]
        await store.dispatch(userDetails(1));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })

    it ("On redeemCard Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.post.mockResolvedValueOnce({data:{ id: 1, name: "amazon" }})
        const expectedAction = [
            {
                type: REDEEM_CARD,
                payload: { id: 1, name: "amazon" }
            }
        ]
        await store.dispatch(redeemCard(1, {name: "amazon" }));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })

});