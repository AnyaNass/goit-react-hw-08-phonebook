import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./auth-operations";

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
	isLoading: false,
	errorLogin: null,
	errorRegister: null,
	error: null,
	isRefreshingUser: false
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.pending]: (state) => {
			state.isLoading = true;
			state.errorRegister = null;
		},
		[register.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.token = payload.token;
			state.isLoggedIn = true;
			state.isLoading = false;
		},
		[register.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.errorRegister = payload;
		},
		[login.pending]: (state) => {
			state.isLoading = true;
			state.errorLogin = null;
		},
		[login.fulfilled]: (state, { payload }) => {
			state.user = payload.user;
			state.token = payload.token;
			state.isLoggedIn = true;
			state.isLoading = false;
		},
		[login.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.errorLogin = payload;
		},
		[logout.pending]: (state) => {
			state.isLoading = true;
			state.errorLogin = null;
			state.errorRegister = null;
		},
		[logout.fulfilled]: (state) => {
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
		},
		[logout.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		[refreshUser.pending]: (state) => {
			state.isRefreshingUser = true;
		},
		[refreshUser.fulfilled]: (state, { payload }) => {
			state.user = payload;
			state.isLoggedIn = true;
			state.isRefreshingUser = false;
		},
		[refreshUser.rejected]: (state, { payload }) => {
			state.isRefreshingUser = false;
			state.error = payload;
		},
	}
})

export default authSlice.reducer;