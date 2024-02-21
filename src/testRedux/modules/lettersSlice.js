import { createSlice } from '@reduxjs/toolkit';
import fakeData from 'fakeData.json';



const initialState = fakeData;

const lettersSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      const newLetter = action.payload;
      return [newLetter, ...state];
    },
    deleteLetter: (state, action) => {
      const letterId = action.payload;
      return state.filter((item) => item.id !== letterId);
    },
    changeLetter: (state, action) => {
      const { id, changeText } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, content: changeText }
        }
        return item;
      })
    }
  }
})


export const { addLetter, deleteLetter, changeLetter } = lettersSlice.actions;
export default lettersSlice.reducer;