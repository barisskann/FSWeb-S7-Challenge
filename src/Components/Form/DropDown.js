import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aray } from "../../Css/data";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import { changeData, totalValue, changeSize, dropdownchck } from "../../Store";

function Example({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { data } = useSelector(({ form: { data } }) => {
    return { data };
  });
  const dispatch = useDispatch();
  const handleClick = (e, item) => {
    const { name, value } = e.target;
    dispatch(changeData({ name, value }));
    dispatch(changeSize(item.price));
    dispatch(totalValue());
    dispatch(dropdownchck(value));
  };

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const render = aray.map((item, sayac) => {
    return (
      <DropdownItem
        name="dropdown"
        onClick={(e) => handleClick(e, item)}
        key={sayac}
        value={ item.size}
        
      >
        {item.size}
      </DropdownItem>
    );
  });
  return (
    <div className="">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} >
        <DropdownToggle caret>
          {data.dropdown === "" ? "Choose size" : data.dropdown}
        </DropdownToggle>
        <DropdownMenu >{render}</DropdownMenu>
      </Dropdown>
    </div>
  );
}

Example.propTypes = {
  direction: PropTypes.string,
};

export default Example;
