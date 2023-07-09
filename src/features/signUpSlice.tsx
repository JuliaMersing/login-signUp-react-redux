import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface existingUserType {
	email: string;
}

const initialState = {
	email: '',
};

export const registerSlice = createSlice({
	name: 'signUp',
	initialState,
	reducers: {
		existingUser: (state, { payload }: PayloadAction<existingUserType>) => {
			state.email = payload.email;
		},
	},
});

export const { existingUser } = registerSlice.actions;

export default registerSlice.reducer;
