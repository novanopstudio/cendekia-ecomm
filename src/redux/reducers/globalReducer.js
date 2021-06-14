import { GLOBAL } from '../defines';

const initialState = {
    category: "food",
    keyword: "",
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBAL.SET_CATEGORY:
            return {
                ...state, category: action.category,
            };
        case GLOBAL.SET_SEARCH:
            return {
                ...state, keyword: action.keyword,
            };
        default:
            return state;
    }
};

export default globalReducer;