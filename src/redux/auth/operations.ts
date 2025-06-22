import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginContact, RegisterContact } from "../../types/types";
import { RootState } from "../store";
import { AuthResponse, RefreshResponse } from "../../types/types";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (value: string) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk(
  "auth/register",
  async (values: RegisterContact) => {
    const response = await axios.post<AuthResponse>("/users/signup", values);
    setAuthHeader(`Bearer ${response.data.token}`);
    return response.data;
  }
);

export const login = createAsyncThunk("auth/login", async (values: LoginContact) => {
  const response = await axios.post<AuthResponse>("/users/login", values);
  setAuthHeader(`Bearer ${response.data.token}`);
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  setAuthHeader("");
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;
    setAuthHeader(`Bearer ${persistedToken}`);
    const response = await axios.get<RefreshResponse>("/users/current");
    return response.data;
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      const persistedToken = state.auth.token;
      // if (persistedToken === null) {
      //   return false; // Skip the request if no token is present
      // }
      // return true; // Proceed with the request if a token exists
      return persistedToken !== null;
    },
  }
);
