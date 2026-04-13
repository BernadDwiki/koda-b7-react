import { createSlice } from '@reduxjs/toolkit';

const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    surveys: [],
  },
  reducers: {
    addSurvey: (state, action) => {
      state.surveys.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    removeSurvey: (state, action) => {
      state.surveys = state.surveys.filter((s) => s.id !== action.payload);
    },
  },
});

export const { addSurvey, removeSurvey } = surveySlice.actions;
export default surveySlice.reducer;
