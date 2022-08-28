import { createSelector } from "reselect"
import { RootReducerState } from "../root-rudcer";

export const userReducer = (state: RootReducerState) => state.user;

export const selectCurrentuser = createSelector(
    [userReducer],
    (userSlice) => userSlice.currentUser
);


export const currentUserErrorSecector = createSelector(
    [userReducer],
    (userSlice) => userSlice.error
)
