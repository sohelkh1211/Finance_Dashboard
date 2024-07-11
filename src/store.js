import { configureStore } from "@reduxjs/toolkit";
import changeNumber from "./reducers/changeNumber";

const store = configureStore({
    reducer: {
        number: changeNumber
    }
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;