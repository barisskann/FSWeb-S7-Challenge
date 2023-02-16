import React from "react";
import Dropdown from "./DropDown";
import Radio from "./İnputRadio";
import CheckBox from "./inputCheckbox";
import Switch from "./İnputSwitch";
import AddExtra from "./Addİnput";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
export default function Form(params) {
  const dispatch = useDispatch();
  const { dropdownCheck } = useSelector(({ form: { dropdownCheck } }) => {
    return { dropdownCheck };
  });
 
  return (
    <div className="">
      <div className="form mt-4">
        <div className="">
          <div className=" d-flex flex-column justify-content-center align-items-center  ">
            <h1 className=" title mb-3">Ordered FOR PİZZA</h1>
            <Dropdown />
            <p className="dcheck me-5">{dropdownCheck && "Required"}</p>
          </div>
        </div>

        <div className="d-flex  mt-4 justify-content-between flex-wrap ">
          <div className="checkbox">
            <h3 className="mb-2 title">What do you want extra</h3>
            <CheckBox className="" />
          </div>
          <div className="">
            <p className="mb-2 title">Do you Want which Souce</p>
            <Radio />
            <div className="d-flex align-items-center mt-3">
              <h3 className=" title me-2">Do you want serving</h3>
              <Switch className="" />
            </div>
            <h3 className="title my-3 ">Do you want anything extra</h3>
            <AddExtra />
          </div>
        </div>
        <div>
          <Button
            disabled={dropdownCheck}
            className="w-100 mt-3"
          >
            <Link to="/form/onay">
              <p>Order</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
