import React from "react";
import { Button, Navbar } from "reactstrap";
import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
import { checkList, radioArray } from "../../Css/data";
import { useDispatch } from "react-redux";
import { dataReset } from "../../Store";

function Example(args) {
  const dispatch = useDispatch();
  const handleClick = () => {
    checkList.map((item) => (item.check = false));
    radioArray.map((item) => (item.check = false));
    dispatch(dataReset());
  };
  return (
    <div>
      <Navbar {...args} className="text-light" fixed="top" color="dark">
        <div className=" d-flex  justify-content-around align-items-center w-100  m-4 fw-4 flex-wrap ">
          <div className="  d-flex align-items-center flex-grow-1 justify-content-center gap-3">
            <Link to="/" className="d-flex gap-2 text-center">
              <div onClick={handleClick} className="">
                <MdFastfood className=" text-danger" />
                Home
              </div>
            </Link>
          </div>
          <p className="  text-warning">THİS YOURS QUALİTY</p>
          <div className="d-flex justify-content-end gap-4 align-items-start flex-grow-1   ">
            <Link to="/about" className="">
              ABOUT
            </Link>
            <Link to="/content" className=" ">
              CONTENT
            </Link>
          </div>
        </div>
      </Navbar>
      <div className="header-img">
        <div className="header-btn">
          <Button
            outline={false}
            className="px-5 py-2 fw-bold fw-light border-0 text-opacity-75 text-dark test-order"
            color="warning"
          >
            <Link className="fast-order" to="/form" data-cy="test">
              <p className="text-dark">Fast Ordered</p>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Example;
