import usersReducer from "./usersReducer";
import { RECEIVED_CARDS, SENT_CARDS, USER_DETAILS, REDEEM_CARD, UPDATE_BALANCE, UPDATE_TRANSACT } from './../actions/types';

describe ("UsersReducer Reducer Tests", () => {
        
    it ("should be empty state", () => {
        let state = {
            cards: [],
            UserDetails: []
          };
        expect(usersReducer ({
            cards: [],
            UserDetails: []
          }, {})).toEqual(state)
    });

    it("when action type is RECEIVED_CARDS", () =>{
        let state = {
            cards: [],
            UserDetails: []
          };
        expect(usersReducer (state, {type:RECEIVED_CARDS, 
            payload:{data:[{id:1, name:'new card1'},{id:2, name:'new card2'}], totalCount:2}}))
          .toEqual({cards: [{id:1, name:'new card1'},{id:2, name:'new card2'}],
          totalCount:2, UserDetails: []})
    });

    it("when action type is SENT_CARDS", () =>{
        let state = {
            cards: [],
            UserDetails: []
          };
        expect(usersReducer (state, {type:SENT_CARDS, 
            payload:{data:[{id:1, name:'new card1'},{id:2, name:'new card2'}], totalCount:2}}))
          .toEqual({cards: [{id:1, name:'new card1'},{id:2, name:'new card2'}],
          totalCount:2, UserDetails: []})
    });

    it("when action type is USER_DETAILS", () =>{
        let state = {
            cards: [],
            UserDetails: []
          };
        expect(usersReducer (state, {type:USER_DETAILS, 
            payload:{userId:1, userName:'new user1'}}))
          .toEqual({cards: [], UserDetails: {userId:1, userName:'new user1'}})
    });

    it("when action type is UPDATE_BALANCE", () =>{
        let state = {
            cards: [],
            UserDetails: []
          };
        expect(usersReducer (state, {type:UPDATE_BALANCE, 
            payload:{userId:1, userName:'new user1', balance:500}}))
          .toEqual({cards: [], UserDetails: {userId:1, userName:'new user1',balance: 500}})
    });

    it("when action type is UPDATE_TRANSACT", () =>{
        let state = {
            cards: [],
            UserDetails: []
          };
        expect(usersReducer (state, {type:UPDATE_TRANSACT, 
            payload:[{id:1, name:'new card1'},{id:2, name:'new card2'}]}))
          .toEqual({cards: [{id:1, name:'new card1'},{id:2, name:'new card2'}], UserDetails: []})
    });

    it("when action type is REDEEM_CARD", () =>{
        let state = {
            cards: [{id:1, name:'new card1'},{id:2, name:'new card2'}],
            UserDetails: []
          };
        expect(usersReducer (state, {type:REDEEM_CARD, payload: {id:1, name:'new card1'}}))
          .toEqual({cards: [{id:1, name:'new card1', isRedeemed: true},{id:2, name:'new card2'}], UserDetails: []})
    });

    it("when action type is REDEEM_CARD when card is not present", () =>{
        let state = {
            cards: [{id:1, name:'new card1'},{id:2, name:'new card2'}],
            UserDetails: []
          };
        expect(usersReducer (state, {type:REDEEM_CARD, payload: {id:3, name:'new card3'}}))
          .toEqual({cards: [{id:1, name:'new card1'},{id:2, name:'new card2'}], UserDetails: []})
    });


    it ("should be same state", () => {
        let state = [];
        expect(usersReducer(state, {type:'__UNKNOWN'})).toStrictEqual({})
    });

})