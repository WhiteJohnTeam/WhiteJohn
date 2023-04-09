import Card from "../../classes/Card";
import { PlayerType } from "../../classes/PlayerType";
import { DRAW_CARD, PLAYER_STANDS, RESTART_GAME, SET_DECK, START_GAME } from "../constants"

/**
 * (note)
 * j'ai essayer de faire des fonction et de les appeler dans le reducer
 * pour faire plus propre. En faisant ça j'ai eu des problemes de mise a jour
 * des vues et sans beacoup de temps restant j'ai decicder de laisser le reducer
 * comme ça, mais je comprend qu'on aurait du factoriser le code en plusieurs
 * fonctions.
 */

const initialState = {
    deckId: "",
    playerHand: [],
    dealerHand: [],
    gameWinner: PlayerType.Dealer,
    gameEnded: false,
    playerTotal: 0
}

/**
 * Helper function to handle player win
 */

const EndOfGame = (state, player) => {
    return {
        ...state,
        gameEnded: true,
        gameWinner: player
    };
}

/**
 * Helper function to handle dealer win
 */
const DealerWon = (state, newDealerHand) => {

    return {
        ...state,
        dealerHand: newDealerHand,
        gameWinner: PlayerType.Dealer,
        gameEnded: true
    }
}
/**
 * Reducer function for the game state
 * @param {*} state Current state of the game
 * @param {*} action Action dispatched to update the game state
 * @returns {*} New state of the game after applying the action
 */

export default wjReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DECK:
            return {
                ...state,
                deckId: action.payload.deckId
            };

        case DRAW_CARD:
            if (action.payload.player == PlayerType.Player) {

                // take the current hand and add new card
                let newHand: Card[] = [...state.playerHand];

                newHand.push(new Card(action.payload.cardValue, action.payload.cardSuit));


                if (CalculateHandValue(newHand) == 21) {
                    return EndOfGame(state, PlayerType.Player);
                } else if (CalculateHandValue(newHand) > 21) {
                    return EndOfGame(state, PlayerType.Dealer);
                }
                {
                    return {

                        ...state,
                        playerHand: newHand,
                    };
                }
            } else {

                let newHand = [...state.dealerHand];
                newHand.push(new Card(action.payload.cardValue, action.payload.cardSuit));

                return {
                    ...state,
                    dealerHand: newHand
                }
            }


        case START_GAME:
            let newPlayerHand = [...state.playerHand];
            let newDealerHand = [...state.dealerHand];

            // Draw two cards for the player
            for (let i = 0; i < 2; i++) {
                const { value, suit } = action.payload[i];
                //
                newPlayerHand.push(new Card(value, suit));
            }

            // Draw two cards for the dealer
            for (let i = 2; i < 4; i++) {
                const { value, suit } = action.payload[i];
                newDealerHand.push(new Card(value, suit));
            }

            // now we calculate the initial scores to check for an early blackjack:
            const playerScore = CalculateHandValue(newPlayerHand);
            const dealerScore = CalculateHandValue(newDealerHand);


            // if the player has instant blackJack, the game ends
            if (playerScore == 21) {

                return EndOfGame(state, PlayerType.Player)

            } else if (dealerScore == 21) {
                return EndOfGame(state, PlayerType.Dealer)
            } else {
                return {
                    ...state,
                    playerHand: newPlayerHand,
                    dealerHand: newDealerHand
                };
            }

        case RESTART_GAME:
            return {
                ...state,
                playerHand: [],
                dealerHand: [],
                gameEnded: false,
                gameWinner: PlayerType.Dealer
            };

        case PLAYER_STANDS:
            let delaerTotal = CalculateHandValue(action.payload.dealerHand);
            let playerTotal = CalculateHandValue([...state.playerHand]);
            
            switch (true) {
                case playerTotal > 21:
                    console.warn("1");
                    return DealerWon(state, action.payload.dealerHand)

                case delaerTotal > 21:
                    console.warn("2");
                    return EndOfGame(state, PlayerType.Player);

                case delaerTotal > playerTotal:
                    console.warn("3");
                    return DealerWon(state, action.payload.dealerHand);

                case playerTotal > delaerTotal:
                    console.warn("4");
                    return EndOfGame(state, PlayerType.Player);

                case playerTotal == delaerTotal:
                    console.warn("5");
                    return EndOfGame(state, PlayerType.Player);
            }

        default:
            return state;
    }
}

/* FUNCTIONS TO HANDLE GAME LOGIC */

export function CalculateHandValue(hand: Card[]): number {
    let value: number = 0;
    let hasAce = false;

    for (let card of hand) {

        // sommer la valeur de chaque carte
        value += Math.min(card.GetRealValue(), 10);

        // si carte c'est un ace set hasAce
        if (card.GetRealValue() == 1) {
            hasAce = true;
        }
    }
    // si ace et ne bust pas la main, ajouter
    if (hasAce && value + 10 <= 21) {
        value += 10;
    }
    return value;
}

/* USE CASES :

# Game starts:
- player gets 21 => blackjack
- plater gets less then 21 => can hit or stand


*/