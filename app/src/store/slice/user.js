import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogged: null,
    userInfos: null,
    userId: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signin: (state, action) => {
            state.isLogged = true;
            state.userInfos = action.payload;
        },
        signout: (state, action) => {
            state.isLogged = false;
            state.userInfos = null;
            localStorage.removeItem("auth");
            localStorage.removeItem("user_role");
        }
    }
});

export const { signin, signout } = userSlice.actions

export default userSlice.reducer;