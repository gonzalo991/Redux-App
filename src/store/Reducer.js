import { configureStore } from '@reduxjs/toolkit';
//Reducers
import users from './slices/Users';

export default configureStore({
    reducer: {
        users
    }
});