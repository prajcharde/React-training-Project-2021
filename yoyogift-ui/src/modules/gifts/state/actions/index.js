import { FETCH_CARDS, FETCH_CARD, FETCH_CARD_FILTER, ADMIN_ADD_CARD, UPDATE_CARD_COUNT, ADMIN_UPDATE_CARD } from './types';
import axios from "axios";
import { apiURL } from '../../../../config/constants';

export const fetchCards = (startIndex, endIndex) => async (dispatch) => {
    const response = await axios.get(`${apiURL}/giftCards?_start=${startIndex}&_end=${endIndex}`);  
    dispatch ({
        type: FETCH_CARDS,
        payload: { data:response.data, totalCount: response.headers['x-total-count']}
    })
}

export const fetchCard = (id) => async (dispatch) => {
    const response = await axios.get(`${apiURL}/giftCards/${id}`);
    dispatch ({
        type: FETCH_CARD,
        payload: response
    })
}

export const adminUpdateCard = (id, object) => async (dispatch) => {
    const response = await axios.patch(`${apiURL}/giftCards/${id}`, object);
    dispatch ({
        type: ADMIN_UPDATE_CARD,
        payload: response
    })
}

export const fetchCardFilter = (object) => async (dispatch) => {
    dispatch ({
        type: FETCH_CARD_FILTER,
        payload: object
    })
}

export const adminAddCard = (object) => async(dispatch) => {
    const response = await axios.post(`${apiURL}/giftCards`, object);
    dispatch ({
        type: ADMIN_ADD_CARD,
        payload: response.data
    })
}

export const updateCardCount = (cardId, cardCount) => async(dispatch) => {
    const response = await axios.patch(`${apiURL}/giftCards/${cardId}`, { cardCount: cardCount});
    dispatch ({
        type: UPDATE_CARD_COUNT,
        payload: response.data
    })
}
