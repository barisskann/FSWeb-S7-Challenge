import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./Slices/FormSlice";
import {
  changeData,
  totalValue,
  changeSize,
  personData,
  checkValidate,
  dropdownchck,
  dataReset,
  handleRemove,
  changeExtra,
} from "./Slices/FormSlice";
const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
export {
  store,
  changeData,
  checkValidate,
  totalValue,
  changeSize,
  personData,
  dropdownchck,
  dataReset,
  handleRemove,
  changeExtra,
};
