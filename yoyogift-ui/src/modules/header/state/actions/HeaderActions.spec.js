import axios from "axios";
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import {
createUser, login, logout
} from "./index";
import { LOGIN, LOGOUT, CREATE_USER } from "./types";

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('All Header actions', function description() {
    it ("On login Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.get.mockResolvedValueOnce({data:[{ id: 1, name: "Prajakta" }]})
        const expectedAction = [
            {
                type: LOGIN,
                payload: { id: 1, name: "Prajakta" }
            }
        ]
        let user = {
            "id": '',
            "email": '',
            "first_name": '',
            "last_name": '',
            "picture":''
        }
        await store.dispatch(createUser(user));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
    })

    it ("On login Action trigger", async () => {
        let state = {};
        const store = mockStore(state);
        axios.get.mockResolvedValueOnce({data:[]});
        axios.post.mockResolvedValueOnce({data:[{ id: 1, name: "Prajakta" }]})
        const expectedAction = [
            {
                type: CREATE_USER,
                payload: [{ id: 1, name: "Prajakta" }]
            }
        ]
        let user = {
            "id": '',
            "email": '',
            "first_name": '',
            "last_name": '',
            "picture":''
        }
        await store.dispatch(createUser(user));
        const getAction = store.getActions();
        expect(getAction).toEqual(expectedAction);
        let loggOUT = logout();
        expect(loggOUT).not.toBe(null);
    })

});