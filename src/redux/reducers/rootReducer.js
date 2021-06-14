import { combineReducers } from 'redux';

import globalReducer from './globalReducer';
import shopReducer from './shopReducer';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';

const rootReducer = combineReducers({
    globalReducer,
    shopReducer,
    cartReducer,
    wishlistReducer,
});

export default rootReducer;
