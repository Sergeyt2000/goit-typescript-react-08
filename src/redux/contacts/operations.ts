import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Contact } from "../../types/types";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await axios.get("/contacts");
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact: {name: string; number: string }) => {
    const response = await axios.post<Contact>("/contacts", contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId: string) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, name, number }: Contact) => {
    const response = await axios.patch<Contact>(`/contacts/${id}`, {
      name,
      number,
    });
    return response.data;
  }
);
