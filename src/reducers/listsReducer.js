import {CONSTANTS} from "../actions";

let listID = 2;
let cardID = 6;

const initialState = [
    {
        title: "Last Episode",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "we created a static list and a static card"
            },
            {
                id: `card-${1}`,
                text: "we used a mix between material UI React and styled components"
            }
        ]
    },
    {
        title: "This Episode",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "we created a static list and a static card"
            },
            {
                id: `card-${3}`,
                text: "we used a mix between material UI React and styled components"
            },
            {
                id: `card-${4}`,
                text: "we created a static list and a static card"
            },
            {
                id: `card-${5}`,
                text: "we used a mix between material UI React and styled components"
            }
        ]
    },
];

const listsReducer = (state = initialState, action) => {
    switch(action.type) {

        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: `list-${listID}`
            };
            listID += 1;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            };
            cardID += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });

            return newState;

        default:
            return state;
    }
};

export default listsReducer;