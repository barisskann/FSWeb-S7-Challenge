import React from "react";
import { useDispatch } from "react-redux";
import { changeData } from "../../Store";
import { radioArray } from "../../Css/data";
export default function İnputRadio(params) {
  const dispatch = useDispatch();
  const handleChange = (e, item) => {
    const { value, name } = e.target;
    dispatch(changeData({ name, value }));
    radioArray.filter((data) => {
      if (data.name === item.name) {
        data.check = true;
      } else {
        data.check = false;
      }
      return data;
    });
  };
  const render = radioArray.map((item) => {
    return (
      <div key={item.name}>
        <input
          onChange={(e) => {
            handleChange(e, item);
          }}
          id={item.name}
          type="radio"
          name="radio"
          value={item.name}
          className="mb-2"
          checked={item.check}
        />
        <label htmlFor={item.name}>{item.name}</label>
      </div>
    );
  });
  return <div>{render}</div>;
}
