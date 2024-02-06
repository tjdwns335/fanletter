import fakeData from 'fakeData.json';

// 팬레터 추가
const ADD_LETTER = "letters/ADD_LETTER";
// 팬레터 삭제
const DELETE_LETTER = "letters/DELETE_LETTER";
// 팬레터 수정
const CHANGE_LETTER = "letters/CHANGE_LETTER";

export const addLetter = (payload) => {
  return { type: ADD_LETTER, payload };
}
export const deleteLetter = (payload) => {
  return { type: DELETE_LETTER, payload };
}
export const changeLetter = (payload) => {
  return { type: CHANGE_LETTER, payload };
}

const initialState = fakeData;

const letters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      const newLetter = action.payload;
      return [newLetter, ...state];
    case DELETE_LETTER:
      const letterId = action.payload;
      return state.filter((item) => item.id !== letterId);
    case CHANGE_LETTER:
      const { id, changeText } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, content: changeText }
        }
        return item;
      })
    default:
      return state;
  }
}

export default letters;