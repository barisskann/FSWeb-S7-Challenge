import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { personData } from "../../Store";
import * as yup from "yup";
import schema from "../../Schema/Schema";
import { checkValidate } from "../../Store";
export default function example(params) {
  const { person, eror } = useSelector(({ form: { person, eror } }) => {
    return { person, eror };
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(personData({ name, value }));
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        dispatch(checkValidate({ name, value: "" }));
      })
      .catch((err) => dispatch(checkValidate({ name, value: err.errors[0] })));
  };

  return (
    <div>
      <div className="my-4">
        <p>Name - Surname</p>
        <input name="name" value={person.name} onChange={handleChange} />
        <p className="dcheck title mb-2 text-bold">{eror.name}</p>
      </div>
      <div className="my-4">
        <p>Adress</p>
        <textarea
          name="surname"
          value={person.surname}
          onChange={handleChange}
        />
        <p className="dcheck title">{eror.surname}</p>
      </div>
      <div className="my-4">
        <p>Phone Number</p>
        <input name="number" value={person.number} onChange={handleChange} />
        <p className="dcheck title">{eror.number}</p>
      </div>
    </div>
  );
}
