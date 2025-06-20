import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");        
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", contact);
        return response.data;        
    } catch {
        return thunkAPI.rejectWithValue();
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${contactId}`);
        return contactId;        
    } catch {
        return thunkAPI.rejectWithValue();
    }
});

export const updateContact = createAsyncThunk("contacts/updateContact", async ({ id, name, number }, thunkAPI) => {
    try {
        const response = await axios.patch(`/contacts/${id}`, { name, number });
        return response.data;        
    } catch {
        return thunkAPI.rejectWithValue();
    }
});