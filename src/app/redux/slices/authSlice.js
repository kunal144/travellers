// features/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const res = await fetch("https://travellers.zapto.org/api/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (res.status === 200) {
        return data; // { token, user }
      } else {
        return rejectWithValue(data.message || "Login Failed");
      }
    } catch (err) {
      return rejectWithValue("An error occurred during login.");
    }
  }
);

export const signUpUser = createAsyncThunk(
  "auth/signup",
  async (values, { rejectWithValue, dispatch }) => {
    try {
      const res = await fetch("https://travellers.zapto.org/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (res.status === 201) {
        dispatch(loginUser(values));
        return data; // { token, user }
      } else {
        return rejectWithValue(data.message || "SignUp Failed");
      }
    } catch (err) {
      return rejectWithValue("An error occurred during signup.");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isAuthenticated: false,
    userData: null,
    name: null,
    avatar: null,
    sessionId: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.userData = null;
      state.name = null;
      state.avatar = null;
      state.sessionId = null;
      localStorage.removeItem("user_data");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.userData = action.payload.user;
        state.isAuthenticated = true;
        state.name = action.payload.user.name;
        state.avatar = action.payload.user.avatarUrl || null;
        state.sessionId = action.payload.user._id;
        localStorage.setItem(
          "user_data",
          JSON.stringify({
            userToken: action.payload.token,
            user: action.payload.user,
          })
        );
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
