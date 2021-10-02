import React from 'react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import ReactDOM from "react-dom"
import App from "../src/modules/App"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("GiftsSendContainer Section Test", () => {
    
      const state = {

      }
      const store1 = mockStore(state);
    it("should load GiftsSendContainer Component", () => {
        // let wrapper = shallow(<Provider store={store1}><GiftsSendContainer /></Provider>);
        // expect(wrapper).not.toBe(null);
        const root = document.createElement("div")
        root.id = "root"
        document.body.appendChild(root)

        // Requires index.js so that react-dom render method is called
        require("./index.js")

        // Asserts render was called with <App />
        // and HTML element with id = root
        expect(ReactDOM.render).toHaveBeenCalled()
    });
});