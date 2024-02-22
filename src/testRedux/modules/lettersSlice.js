import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { jsonApi } from 'api';

const initialState = {
  letters: [],
  isLoading: false,
  isError: false,
  error: null
};

const getLetterFromDB = async () => {
  const { data } = await jsonApi.get("/letter?_sort=-createdAt");
  return data;
}

export const __getLetters = createAsyncThunk(
  "getLetters",
  async (payload, thunkAPI) => {
    try {
      const letters = await getLetterFromDB();
      return letters;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const __addLetter = createAsyncThunk(
  "addLetter",
  async (newLetter, thunkAPI) => {
    try {
      await jsonApi.post("/letters", newLetter);
      const letters = await getLetterFromDB();
      return letters;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }

  }
)

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
  },
  extraReducers: (builder) => {
    builder.addCase(__addLetter.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__addLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    });
    builder.addCase(__addLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    builder.addCase(__getLetters.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__getLetters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.letters = action.payload;
    });
    builder.addCase(__getLetters.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  }
})


export const { addLetter, deleteLetter, changeLetter } = lettersSlice.actions;
export default lettersSlice.reducer;