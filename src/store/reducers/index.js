    import catalogReducer from "./catalogReducer";
    import cartReducer from "./cartReducer";
    import { combineReducers } from "redux";

    export default combineReducers({
        catalog: catalogReducer,
        cart: cartReducer,
    });