import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    data: { extra: "", dropdown: "", radio: "", swich: false },
    aray: [],
    sayac: 0,
    size: 0,
    extra: 0,
    totalPrice: 0,
    eror: { name: "", surname: "", number: "" },
    person: { name: "", surname: "", number: "" },
    dropdownCheck: true,
  },
  reducers: {
    changeData(state, action) {
      if (action.payload.type === "checkbox") {
        state.data[action.payload.name] = action.payload.checked;
        if (action.payload.checked) {
          state.extra = state.extra + 1;
        } else {
          state.extra = state.extra - 1;
        }
      } else if (action.payload.name === "swich") {
        state.data[action.payload.name] = action.payload.checked;
      } else {
        state.data[action.payload.name] = action.payload.value;
      }
    },
    totalValue(state, action) {
      state.totalPrice = state.extra + state.size;
    },
    changeSize(state, action) {
      state.size = action.payload;
    },
    personData(state, action) {
      state.person[action.payload.name] = action.payload.value;
    },

    checkValidate(state, action) {
      state.eror[action.payload.name] = action.payload.value;
    },

    dropdownchck(state, action) {
      if (action.payload === "Choose size") {
        state.dropdownCheck = true;
      } else {
        state.dropdownCheck = false;
      }
    },
    dataReset(state, action) {
      state.data = { extra: "", dropdown: "", radio: "", swich: false };
      state.size = 0;
      state.extra = 0;
      state.totalPrice = 0;
      state.dropdownCheck = true;
    },
  },
});

export const formReducer = formSlice.reducer;
export const {
  changeData,
  totalValue,
  changeSize,
  personData,
  checkbox,
  checkValidate,
  dropdownchck,
  dataReset,
} = formSlice.actions;
