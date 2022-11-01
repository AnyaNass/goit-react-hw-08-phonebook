export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

export const selectIsRefreshingUser = state => state.auth.isRefreshingUser;

export const selectIsLoading = state => state.auth.isLoading;

export const selectError = state => state.auth.error;