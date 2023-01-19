import React from "react";
import { data } from "../../Css/data";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
function Section(params) {
  const render = data.map((item, sayac) => {
    return (
      <div key={sayac} className="my-4">
        <Link to={item.name}>
          {" "}
          <Button className="btnn">
            <div className="list-item  flex-wrap text-center  ">
              <div className="img-item">
                <img className="w-100" src={item.url} alt="img" />
              </div>
              <div>{item.name}</div>
              <div>{item.title}</div>
              <div>{item.time}</div>
              <div>{item.price}</div>
            </div>
          </Button>
        </Link>
      </div>
    );
  });
  return (
    <div>
      <h1 className="text-center my-3 text-danger ">Flavors you will love</h1>

      <div className=" list d-flex flex-wrap justify-content-center gap-3 ">
        {render}
      </div>
    </div>
  );
}
export default Section;
