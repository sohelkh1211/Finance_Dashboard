import { configureStore } from "@reduxjs/toolkit";
import changeNumber from "./reducers/changeNumber";
import changeIcon from './reducers/icons';

const store = configureStore({
    reducer: {
        number: changeNumber,
        icon: changeIcon
    }
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;