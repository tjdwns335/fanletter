import { createSlice } from "@reduxjs/toolkit"


const initialState = "효정"

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      const activeMember = action.payload;
      return activeMember;
    }
  }
})

export const { setMember } = memberSlice.actions;

export default memberSlice.reducer;