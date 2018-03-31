import {combineReducers} from 'redux';
import homebanner from './state/home/homebanner.js';

const reducer = combineReducers({
	//各个组件中各自的状态
	homebanner,
})

export default reducer;