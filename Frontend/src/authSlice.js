
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,       // used by login/register/logout button states
    authChecked: false,   // used only for the initial app-load gate
    error: null
  },
  reducers: {
    clearError: (state) => { state.error = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(registerUser.fulfilled, (state, action) => { state.loading = false; state.isAuthenticated = !!action.payload; state.user = action.payload; })
      .addCase(registerUser.rejected, (state, action) => { state.loading = false; state.error = action.payload?.message || 'Something went wrong'; state.isAuthenticated = false; state.user = null; })

      .addCase(loginUser.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(loginUser.fulfilled, (state, action) => { state.loading = false; state.isAuthenticated = !!action.payload; state.user = action.payload; })
      .addCase(loginUser.rejected, (state, action) => { state.loading = false; state.error = action.payload?.message || 'Something went wrong'; state.isAuthenticated = false; state.user = null; })

      // checkAuth now controls authChecked, NOT loading
      .addCase(checkAuth.pending, (state) => { state.authChecked = false; })
      .addCase(checkAuth.fulfilled, (state, action) => { state.authChecked = true; state.isAuthenticated = !!action.payload; state.user = action.payload; })
      .addCase(checkAuth.rejected, (state, action) => { state.authChecked = true; state.isAuthenticated = false; state.user = null; })

      .addCase(logoutUser.pending, (state) => { state.loading = true; })
      .addCase(logoutUser.fulfilled, (state) => { state.loading = false; state.user = null; state.isAuthenticated = false; state.error = null; })
      .addCase(logoutUser.rejected, (state, action) => { state.loading = false; state.error = action.payload?.message || 'Something went wrong'; state.isAuthenticated = false; state.user = null; });
  }
});


export const { clearError } = authSlice.actions;
export default authSlice.reducer;