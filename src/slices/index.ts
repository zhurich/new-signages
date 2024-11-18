import { configureStore } from '@reduxjs/toolkit';
import pointerConstructorReducer from './pointerConstructorSlice';

export default configureStore({
  reducer: {
    pointerConstructor: pointerConstructorReducer,
  },
});