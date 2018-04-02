import {createStore} from 'redux';

import reducer from './reducer/index.js';

//创建单一store,reducer只可能有一个
const store = createStore(reducer);

export default store
