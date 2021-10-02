import loginReducer from "./loginReducer";
import { LOGIN, LOGOUT } from "../actions/types";
import { logout } from "../actions";

describe ("Login Reducer Tests", () => {
    
    let user;
    beforeEach(() => {
         user=null 
    });

    
    it ("should be empty list", () => {
        let state = {};
        let login = {...state,
            loginStatus: true,
            detailsObject: {}
          }
        let logout = {...state,
            loginStatus: false,
            detailsObject: {}
          }
        const initial = user ? login : logout;
        expect(loginReducer (initial, {})).
        toEqual({"detailsObject": {}, "loginStatus": false})
    });

    it("when action type is LOGIN", () =>{
        let state = {};
        expect(loginReducer ({...state,
            loginStatus: true,
            detailsObject: {}
          }, {type:LOGIN, payload: {id:1, name:'new user'}}))
          .toEqual({"detailsObject": {"id": 1, "name": "new user"}, "loginStatus": true})
    });

    it("when action type is LOGOUT", () =>{
        let state = {}
        expect(loginReducer ({...state,
            loginStatus: false,
            detailsObject: {}
          }, {type:LOGOUT, payload: {id:1, name:'new user'}}))
          .toEqual({"detailsObject": {}, "loginStatus": false})
    })


    it ("should be same state", () => {
        let state = [];
        expect(loginReducer(state, {type:'__UNKNOWN'})).toStrictEqual({})
    });

})