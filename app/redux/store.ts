import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookListSlice from "./bookListSlice";

const rootReducer = combineReducers({
    bookList: bookListSlice,    
})

const store = configureStore({
   reducer: rootReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;