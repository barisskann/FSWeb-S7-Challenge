import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeData } from "../../Store";
export default function name(params) {
  const { data } = useSelector(({ form: { data } }) => {
    return { data };
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeData({ value, name }));
  };
  return (
    <div>
      <textarea
        value={data.extra}
        name="extra"
        onChange={handleChange}
        type="text"
      ></textarea>
    </div>
  );
}
