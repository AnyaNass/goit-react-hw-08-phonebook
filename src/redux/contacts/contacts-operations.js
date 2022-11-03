import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
	"contacts/fetchContacts",
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios("/contacts");
			return data;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
);

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (id, { rejectWithValue }) => {
		try {
			await axios.delete(`/contacts/${id}`);
			return id;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (contact, { rejectWithValue }) => {
		try {
			const { data } = await axios.post("/contacts", contact);
			return data;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const editContact = createAsyncThunk(
	"contacts/editContact",
	async (info, { rejectWithValue }) => {
		try {
			const { data } = await axios.patch(`/contacts/${info[0]}`, info[1]);
			return data;
		} catch (error) {
			return { rejectWithValue };
		}
	}
)