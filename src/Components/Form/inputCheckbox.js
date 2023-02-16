import React from "react";
import { checkList } from "../../Css/data";
import { useDispatch, useSelector } from "react-redux";
import { changeData, handleRemove, totalValue } from "../../Store";
export default function CheckBox(params) {
  const { aray } = useSelector(({ form: { aray } }) => {
    return { aray };
  });
  console.log(aray);
  const dispatch = useDispatch();
  const handleChange = (e, item) => {
    const { checked, name, type } = e.target;
    dispatch(changeData({ name, type, checked }));
    dispatch(totalValue());
    if (checked) {
      item.check = true;
    } else {
      item.check = false;
    }
  };
  const render = checkList.map((item, sayac) => {
    return (
      <div key={sayac} className="  ">
        <input
          id={item.name}
          checked={item.check}
          name={item.name}
          type="checkbox"
          className="mb-1"
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
