
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice';

// create the store
// the store is an object that holds the application's state tree
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// define the RootState type
// RootState is a type that represents the entire state of the application
export type RootState = ReturnType<typeof store.getState>;
// define the AppDispatch type
// AppDispatch is a type that represents the dispatch function
export type AppDispatch = typeof store.dispatch;
