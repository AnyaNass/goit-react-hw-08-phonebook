import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://635b89b1aa7c3f113dbf5a36.mockapi.io";

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