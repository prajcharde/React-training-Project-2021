import { compareCountAsc, compareCountDesc,
comparePointsAsc, comparePointsDesc, 
compareValidityAsc, compareValidityDesc } from './CompareForSort';

describe('Calc component', () => {
  it('compareCountAsc', () => {
        let a = {cardCount: 10};
        let b = {cardCount: 20};
        let comp = compareCountAsc(a, b)
        expect(comp).toBe(-1);
        let c = {cardCount: 20};
        let d = {cardCount: 10};
        let comp1 = compareCountAsc(c, d)
        expect(comp1).toBe(1);
    })

    it('comparePointsAsc', () => {
        let a = {cardPoints: 10};
        let b = {cardPoints: 20};
        let comp = comparePointsAsc(a, b)
        expect(comp).toBe(-1);
        let c = {cardPoints: 20};
        let d = {cardPoints: 10};
        let comp1 = comparePointsAsc(c, d)
        expect(comp1).toBe(1);
    })

    it('comparePointsDesc', () => {
        let a = {cardPoints: 10};
        let b = {cardPoints: 20};
        let comp = comparePointsDesc(a, b)
        expect(comp).toBe(1);
        let c = {cardPoints: 20};
        let d = {cardPoints: 10};
        let comp1 = comparePointsDesc(c, d)
        expect(comp1).toBe(-1);
    })

    it('compareCountDesc', () => {
        let a = {cardCount: 10};
        let b = {cardCount : 20};
        let comp = compareCountDesc(a, b)
        expect(comp).toBe(1);
        let c = {cardCount: 20};
        let d = {cardCount : 10};
        let comp1 = compareCountDesc(c, d)
        expect(comp1).toBe(-1);
    })

    it('compareValidityAsc', () => {
        let a = {cardExpiryDate: new Date()};
        let b = {cardExpiryDate: new Date()+1};
        let comp = compareValidityAsc(a, b)
        expect(comp).toBe(0);
    })

    it('compareValidityDesc', () => {
        let a = {cardExpiryDate: new Date()};
        let b = {cardExpiryDate: new Date() + 1};
        let comp = compareValidityDesc(a, b)
        expect(comp).toBe(0);
    })

});