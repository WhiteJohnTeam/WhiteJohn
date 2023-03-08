import Card from '../classes/Card';

describe('Game', () => {
    it('should handle FETCH_DECK', () => {
        const ace = new Card("ACE", "CLUBS");
        expect(ace.value.toString()).toEqual("ACE");
      });

    it('should return the explected value for KING, QUEEN, JACK or ACE', () => {
        const ace = new Card("ACE", "CLUBS");
        const king = new Card("KING", "CLUBS");
        const queen = new Card("QUEEN", "CLUBS");
        const jack = new Card("JACK", "CLUBS");

        expect(ace.getRealValue()).toEqual(1);
        expect(king.getRealValue()).toEqual(10);
        expect(queen.getRealValue()).toEqual(10);
        expect(jack.getRealValue()).toEqual(10);
    });

});