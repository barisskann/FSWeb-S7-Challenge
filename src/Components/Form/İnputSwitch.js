import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { changeData } from "../../Store";

function Example(props) {
  const { data} = useSelector(({form:{data}}) => {
    return {data}
  })
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, checked } = e.target;
    dispatch(changeData({ name, checked }))
  };

  return (
    <Form>
      <FormGroup switch>
        <Input
          onChange={handleChange}
          name="swich"
          type="switch"
          role="switch"
          checked={data.swich}
        />
        <Label check>{ }</Label>
      </FormGroup>
    </Form>
  );
}

export default Example;
