import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from './slice/counterSlice';

// reducer are the function that take the current state and an action and return a new state
const store = configureStore({
    reducer: {
        counterReducer
    }
});

export default store;