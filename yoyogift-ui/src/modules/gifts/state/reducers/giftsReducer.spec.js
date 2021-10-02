import giftsReducer from "./giftsReducer";
import { FETCH_CARDS, FETCH_CARD, FETCH_CARD_FILTER, UPDATE_CARD_COUNT, ADMIN_ADD_CARD, ADMIN_UPDATE_CARD } from "../actions/types";

describe ("Gifts Reducer Tests", () => {
    
    it ("should be empty giftlist", () => {
        let state = {
            giftCards: [],
            giftCardsFiltered: [],
            giftCard: {}
          };
        expect(giftsReducer ({
            giftCards: [],
            giftCardsFiltered: [],
            giftCard: {}
          }, {})).toEqual(state)
    });

    it("when action type is FETCH_CARDS", () =>{
        let state = {
            giftCards: [],
            giftCardsFiltered: [],
            giftCard: {},
          };
        expect(giftsReducer(state, 
            {type:FETCH_CARDS, payload: {data:[{id:1, name:'new card1'},{id:2, name:'new card2'}], totalCount:2}}))
        .toEqual({
            giftCards: [{id:1, name:'new card1'}, {id:2, name:'new card2'}],
            giftCardsFiltered: [{id:1, name:'new card1'}, {id:2, name:'new card2'}],
            giftCard: {},
            totalCount: 2
          })
    });

    it("when action type is FETCH_CARD_FILTER", () =>{
        let state = {
            giftCards: [],
            giftCardsFiltered: [],
            giftCard: {},
          };
        expect(giftsReducer(state, {type:FETCH_CARD_FILTER, payload: [{id:1, name:'new card'}]}))
        .toEqual({
            giftCards: [],
            giftCardsFiltered: [{id:1, name:'new card'}],
            giftCard: {},
          })
    });

    it("when action type is UPDATE_CARD_COUNT", () =>{
      let state = {
          giftCards: [],
          giftCardsFiltered: [],
          giftCard: {},
        };
      expect(giftsReducer(state, {type:UPDATE_CARD_COUNT, payload: {id:1, name:'new card'}}))
      .toEqual({
          giftCards: [],
          giftCardsFiltered: [],
          giftCard: {id:1, name:'new card'},
        })
  });

    it("when action type is FETCH_CARD", () =>{
      let state = {
          giftCards: [],
          giftCardsFiltered: [],
          giftCard: {},
        };
      expect(giftsReducer(state, {type:FETCH_CARD, payload: {data:{id:1, name:'new card'}}}))
      .toEqual({
          giftCards: [],
          giftCardsFiltered: [],
          giftCard: {id:1, name:'new card'},
        })
  });

  it("when action type is ADMIN_ADD_CARD", () =>{
    let state = {
        giftCards: [],
        giftCardsFiltered: [],
        giftCard: {},
      };
    expect(giftsReducer(state, {type:ADMIN_ADD_CARD}))
    .toEqual({
        giftCards: [],
        giftCardsFiltered: [],
        giftCard: {},
      })
});

it("when action type is ADMIN_UPDATE_CARD", () =>{
  let state = {
      giftCards: [{id:1, name:'new card1'}],
      giftCardsFiltered: [],
      giftCard: {},
    };
  expect(giftsReducer(state, {type:ADMIN_UPDATE_CARD,payload: {data:{id:1, name:'new card'}}}))
  .toEqual({
      giftCards: [{id:1, name:'new card'}],
      giftCardsFiltered: [],
      giftCard: {},
    })
});

it("when action type is ADMIN_UPDATE_CARD with not having id present", () =>{
  let state = {
      giftCards: [{id:1, name:'new card1'}],
      giftCardsFiltered: [],
      giftCard: {},
    };
  expect(giftsReducer(state, {type:ADMIN_UPDATE_CARD,payload: {data:{id:2, name:'new card'}}}))
  .toEqual({
      giftCards: [{id:1, name:'new card1'}],
      giftCardsFiltered: [],
      giftCard: {},
    })
});


    it ("should be same state", () => {
        let state = [];
        expect(giftsReducer(state, {type:'__UNKNOWN'})).toStrictEqual({})
    });

})