import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from './features/auth/authSlice';
import { alertSlice } from './features/alertSlice';

const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        alerts:alertSlice.reducer,
    }
})

export default store;