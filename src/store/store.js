import { configureStore } from '@reduxjs/toolkit';
import surveyReducer from '../slice/surveySlice';
import productReducer from '../slice/productSlice';

const store = configureStore({
  reducer: {
    survey: surveyReducer,
    product: productReducer,
  },
});

export default store;
