import {combineReducers} from "redux";
import { cartreducer } from "./cartreducer";
import  { dataReducer } from './datareducer'


const rootred = combineReducers({
    cartreducer,
    dataReducer
});


export default rootred