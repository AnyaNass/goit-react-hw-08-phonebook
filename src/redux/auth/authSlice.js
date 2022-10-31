import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./auth-operations";

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.token = payload.token;
			state.isLoggedIn = true;
		},
		[login.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.token = payload.token;
			state.isLoggedIn = true;
		},
		[logout.fulfilled]: (state) => {
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
		},
		[refreshUser.fulfilled]: (state, { payload }) => {
			state.user = payload;
			state.isLoggedIn = true;
		}
	}
})

export default authSlice.reducer;