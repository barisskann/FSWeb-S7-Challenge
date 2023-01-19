import React, { useState } from "react";
import { checkList } from "../../Css/data";
import { useDispatch } from "react-redux";
import { changeData, totalValue } from "../../Store";
export default function CheckBox(params) {
  const [deger, setDeger] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e, item) => {
    const { checked, name, type } = e.target;
    dispatch(changeData({ name, type, checked }));
    dispatch(totalValue());
    setDeger(!deger);
    item.check === true ? (item.check = false) : (item.check = true);
  };
  const render = checkList.map((item, sayac) => {
    return (
      <div key={sayac} className="  ">
        <input
          id={item.name}
          name={item.name}
          type="checkbox"
          className="mb-1"
          checked={item.check}
          onChange={(e) => {
            handleChange(e, item);
          }}
        />
        <label className="ms-2" htmlFor={item.name}>
          {item.name}
        </label>
      </div>
    );
  });
  return <div className="">{render}</div>;
}
