import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
	set(token) {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	unset() {
		axios.defaults.headers.common.Authorization = "";
	}
}

export const register = createAsyncThunk('auth/register', async (userInfo, { rejectWithValue }) => {
	try {
		const { data } = await axios.post('users/signup', userInfo);
		token.set(data.token);
		return data;
	} catch (error) {
		return rejectWithValue();
	}
})

export const login = createAsyncThunk('auth/login', async (userInfo, { rejectWithValue }) => {
	try {
		const { data } = await axios.post('users/login', userInfo);
		token.set(data.token);
		return data;
	} catch (error) {
		return rejectWithValue();
	}
})

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
	try {
		await axios.post('users/logout');
		token.unset();
	} catch (error) {
		return rejectWithValue();
	}
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
	const state = thunkAPI.getState();
	const persistedToken = state.auth.token;

	if (!persistedToken) {
		return thunkAPI.rejectWithValue();
	}

	token.set(persistedToken);

	try {
		const { data } = await axios.get('users/current');
		return data;
	} catch (error) {
		return thunkAPI.rejectWithValue();
	}
})