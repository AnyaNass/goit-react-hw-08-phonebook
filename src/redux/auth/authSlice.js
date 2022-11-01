import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./auth-operations";

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isLoading: false,
	error: false,
	isRefreshingUser: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.pending]: (state) => {
			state.isLoading = true;
			state.error = false;
		},
		[register.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.token = payload.token;
			state.isLoggedIn = true;
			state.isLoading = false;
		},
		[register.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = true;
		},
		[login.pending]: (state) => {
			state.isLoading = true;
			state.error = false;
		},
		[login.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.token = payload.token;
			state.isLoggedIn = true;
			state.isLoading = false;
		},
		[login.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = true;
		},
		[logout.pending]: (state) => {
			state.isLoading = true;
			state.error = false;
		},
		[logout.fulfilled]: (state) => {
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
		},
		[logout.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = true;
		},
		[refreshUser.pending]: (state) => {
			state.isRefreshingUser = true;
			state.error = false;
		},
		[refreshUser.fulfilled]: (state, { payload }) => {
			state.user = payload;
			state.isLoggedIn = true;
			state.isRefreshingUser = false;
		},
		[refreshUser.rejected]: (state, { payload }) => {
			state.isRefreshingUser = false;
			state.error = true;
		},
	}
})

export default authSlice.reducer;