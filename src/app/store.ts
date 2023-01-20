import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../features/counter/counter-slice";
import { dogApi } from "../services/dog-api";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogApi.reducerPath]: dogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
