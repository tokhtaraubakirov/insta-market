const ENTER__CARD__VALUES = "ENTER__CARD__VALUES";
const ADD__CARD = "ADD__CARD";
const DELETE__CARD = "DELETE__CARD";
const CLEAR__INPUTS = "CLEAR__INPUTS";

const initState = {
    cards: [],
    values: {
        id: 0,
        cardNumber: '',
        validityPeriod: '',
        cvCode: ''
    },
    newId: 0,
    newCardNumber: '',
    newValidityPeriod: '',
    newCvCode: '',
};

const cardsReducer = (state = initState, action) => {
    switch (action.type) {
        case ENTER__CARD__VALUES:
            return {...state, values: {...state.values, ...action.payload}}
        case ADD__CARD:
            let newState = {...state};
            let id = newState.newId++;
            newState.newCardNumber = newState.values.cardNumber;
            newState.newValidityPeriod = newState.values.validityPeriod;
            newState.newCvCode = newState.values.cvCode;
            const card = {
                id,
                cardNumber: newState.newCardNumber,
                validityPeriod: newState.newValidityPeriod,
                cvCode: newState.newCvCode,
            }
            newState.cards = [...state.cards];
            newState.cards.push(card);
            newState.values.cardNumber = '';
            newState.values.validityPeriod = '';
            newState.values.cvCode = '';
            return newState;
        case DELETE__CARD:
            const cardId = action.index;
            return { ...state, cards: state.cards.filter((val) => val.id !== cardId) };
        case CLEAR__INPUTS:
            let newClearState = { ...state };
            newClearState.values.cardNumber = '';
            newClearState.values.validityPeriod = '';
            newClearState.values.cvCode = '';
        default: {
            return state;
        }
    }
}

export const enterCardValues = (value) => (
    {
        type: ENTER__CARD__VALUES,
        payload: value
    }
)

export const addCard = () => ({
    type: ADD__CARD,
})

export const deleteCard = (index) => ({
    type: DELETE__CARD,
    index
})

export const clearInputs = () => ({
    type: CLEAR__INPUTS
})

export default cardsReducer;