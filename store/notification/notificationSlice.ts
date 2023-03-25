import { createSlice, isAllOf, isAnyOf, isFulfilled, isPending, isRejected, PayloadAction } from "@reduxjs/toolkit";
import { ArgsProps } from "antd/lib/message";
export interface NotificationState {
    isShown: boolean,
    message?: ArgsProps
}

const initialState: NotificationState = {
    isShown: false,
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showMessage: (state: NotificationState, action: any) => {
            console.log(action.payload)
            state.isShown = true;
            state.message = action.payload;
        },
        reset: () => initialState
    },
    extraReducers(builder) {
    },
})

export const { showMessage, reset } = notificationSlice.actions;
export default notificationSlice.reducer