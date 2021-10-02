import { SENT_CARDS, RECEIVED_CARDS, USER_DETAILS, REDEEM_CARD } from "./types";
import axios from "axios";
import { apiURL } from '../../../../config/constants';

export const fetchReceivedCards = (email, startIndex, endIndex) => async (dispatch) => {
    const response = await axios.get(`${apiURL}/giftTransact?receiverEmail=${email}&_start=${startIndex}&_end=${endIndex}`);
    dispatch({
        type: RECEIVED_CARDS,
        payload: { data:response.data, totalCount: response.headers['x-total-count']}
    })
}

export const fetchSentCards = (email, startIndex, endIndex) => async (dispatch) => {
    const response = await axios.get(`${apiURL}/giftTransact?senderEmail=${email}&_start=${startIndex}&_end=${endIndex}`);
    dispatch({
        type: SENT_CARDS,
        payload: { data:response.data, totalCount: response.headers['x-total-count']}
    })
}

export const userDetails = (id) => async (dispatch) => {   
    const response = await axios.get(`${apiURL}/users/${id}`);
    dispatch({
        type: USER_DETAILS,
        payload: response.data
    })
}

export const redeemCard = (rowId, addObj) => async (dispatch) => {
    
    await axios.delete(`${apiURL}/giftTransact/${rowId}`);
    const endRes = await axios.post(`${apiURL}/giftTransact`, addObj);

    dispatch({
        type: REDEEM_CARD,
        payload: endRes.data
    })
    
}

export const updateUserBalance = (id, newBalance) => async () => {
    await axios.patch(`${apiURL}/users/${id}`, {balance_points: newBalance})
    .catch((err) => {
        console.log(err)
    })
}

export const updateTransact = (TransactObj) => async () => {
    await axios.post('/giftTransact', TransactObj )
    .catch((err) => {
        console.log(err)
    })   
}