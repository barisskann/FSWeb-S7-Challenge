import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { checkList } from "../../Css/data";
import PersonData from "./PersonData";
import Headers from "../Home/Header";
import schema from "../../Schema/Schema";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import axios from "axios";
import Footer from "../Footer/Footer";
import { changeExtra, totalValue } from "../../Store";
export default function FormOnay(params) {
  const dispatch = useDispatch();
  let { person, data, totalPrice } = useSelector(
    ({ form: { person, data, totalPrice} }) => {
      return { person, data, totalPrice};
    }
  );
  const handleRemove = (e, item) => {
    setVeri(
      veri.filter((data) => {
        if (data.name === item.name) {
          data.check = false;
        }
        return item.name !== data.name;
      })
    );
    dispatch(changeExtra());
    dispatch(totalValue());
  };
  const handleClick = () => {
    axios
      .post("https://reqres.in/api/users", { data, person })
      .then((err) => console.log(err));
  };
  const [buton, setButon] = useState(false);

  useEffect(() => {
    schema.isValid(person).then((res) => setButon(!res));
  }, [person]);

  const render = checkList.filter((item) => item.check === true);
  const [veri, setVeri] = useState(render);
  const total = veri.map((item) => {
    return (
      <div className="text mt-1 d-flex justify-content-between" key={item.name}>
        <p className="">{item.name}</p>
        <p>
          <TiDelete
            onClick={(e) => handleRemove(e, item)}
            className="text-danger fs-4 align-self-end"
          />
        </p>
      </div>
    );
  });

  const { extra, dropdown, swich, radio } = data;
  return (
    <div>
      <Headers />
      <div className="person ">
        <PersonData />
        <div className="sepet my-4">
          <div className="my-4">
            <p className="title">
              Name: <label className="text">{person.name}</label>
            </p>
          </div>
          <div className="my-4">
            <p className="title">
              Adress: <label className="text">{person.surname}</label>
            </p>
          </div>
          <div className="my-4">
            <p className="title">
              Phone number: <label className="text">{person.number}</label>
            </p>
          </div>
          <div className="content">
            <h2 className="title">Contents</h2>
            <p className="my-3 ">
              <span className="title">SİZE:</span> {dropdown}
            </p>
            <p className="my-3 title">
              <span className="title">SAUCE:</span>
              <span className="text">{radio}</span>
            </p>
            <p className="my-3 title w-50 m-auto">
              <span className="title">EXTRA</span>
              {total}
            </p>
            <p className="my-3 title">
              {swich ? "With Serving" : "Without Serving"}
            </p>
            <p className="my-3 text-warning  ">{extra}</p>
          </div>
          <p>
            <span className="title">Price</span>: {totalPrice}$
          </p>
          <div>
            <Button
              onClick={() => {
                handleClick();
              }}
              disabled={buton}
              className="w-100 mt-1"
            >
              SUBMİT
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
