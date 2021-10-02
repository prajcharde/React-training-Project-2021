import { FETCH_CARDS, FETCH_CARD, FETCH_CARD_FILTER, UPDATE_CARD_COUNT, ADMIN_ADD_CARD, ADMIN_UPDATE_CARD} from '../actions/types';
const INITIAL_STATE = {
  giftCards: [],
  giftCardsFiltered: [],
  giftCard: {},
};

const giftsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case FETCH_CARD:
      state = { ...state, giftCard: action.payload.data }
      break;

    case FETCH_CARDS:
      state = {
        ...state,
        giftCards: action.payload.data, totalCount: action.payload.totalCount
      };
      state = {
        ...state,
        giftCardsFiltered: action.payload.data, totalCount: action.payload.totalCount
      };
      break;

    case ADMIN_ADD_CARD:
      state = {
        ...state
        // giftCards: action.payload.data
      };
      break;
    
    case ADMIN_UPDATE_CARD:
      state.giftCards = state.giftCards.map(card => {
        if (card.id === action.payload.data.id) {
          return action.payload.data
        } else {
          return card;
        }
      })
      break;

    case FETCH_CARD_FILTER:
      state = {
        ...state,
        giftCardsFiltered: []
      };
      state = {
        ...state,
        giftCardsFiltered: action.payload
      };
      break;
    
      case UPDATE_CARD_COUNT:
        state = { ...state, giftCard: action.payload }
        break;

    default:
      state = {
        ...state
      };
      break;
  }
  return state;
};

export default giftsReducer;
