import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './registerSlice';
import signUpReducer from './signUpSlice';

export const store = configureStore({
	reducer: {
		register: registerReducer,
		signUp: signUpReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
