import React from 'react';
import { shallow } from 'enzyme';
import GiftCard from "./GiftCard";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

describe("Landing Page Test", () => {

    it("should load GiftCard Component", () => {
        let wrapper = shallow(<GiftCard />); 
        expect(wrapper).not.toBe(null);
    });

    it("should have props for GiftCard", () =>{
        let classess = { card: {}, avatar:{}, media:{}}
        let gift = {cardName: 'amazon', id: 1, cardPoints: 10, cardImage: 'image.png', cardCount: 11, cardShortDesc: '10% OFF'}
        let wrapper = shallow(<GiftCard classes={classess} 
            userEmail='praj@gmail.com'
            giftCard={gift}  />)
            wrapper.instance().setState({expanded: false});
        expect(wrapper.instance().state.expanded).toBe(false);
    })

    // it('', () =>{
    //     let classess = { card: {}, avatar:{}, media:{}}
    //     let gift = {cardName: 'amazon', id: 1, cardPoints: 10, cardImage: 'image.png', cardCount: 11, cardShortDesc: '10% OFF'}
    //     const component = renderer.create(
    //         <GiftCard classes={classess} 
    //         userEmail='praj@gmail.com'
    //         giftCard={gift} />
    //       );
    //       const tree = component.toJSON();
    //       expect(tree).toMatchSnapshot();
    // });
});