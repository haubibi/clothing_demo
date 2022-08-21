import { createSelector } from "reselect"

export const userReducer = (state) => state.user;

export const selectCurrentuser = createSelector(
    [userReducer],
    (userSlice) => userSlice.currentUser
);


export const currentUserErrorSecector = createSelector(
    [userReducer],
    (userSlice) => userSlice.error
)
