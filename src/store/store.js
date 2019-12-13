import { createStore } from 'redux';
import usersReducer from '../reducers/users';

const store = createStore(usersReducer);

store.subscribe(() => {
    console.log('store data:', store.getState());
});

export default store;