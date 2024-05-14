import { createSlice } from '@reduxjs/toolkit';
import { persistor } from '../store';

const initialState = {
    isAuthenticated: false,
    userData: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.isAuthenticated = true;
            state.userData = action.payload;
        },
        logoutUser(state) {
            state.isAuthenticated = false;
            state.userData = null;
            persistor.purge(); // Clear persisted state on logout
        }
    }
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
