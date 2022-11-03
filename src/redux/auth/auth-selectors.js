export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectIsRefreshingUser = state => state.auth.isRefreshingUser;

export const selectIsLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;

export const selectErrorLogin = state => state.auth.errorLogin;

export const selectErrorRegister = state => state.auth.errorRegister;