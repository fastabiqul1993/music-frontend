import React, { Fragment } from "react";
import guitar from "../../../Assets/guitar.png";

function DetailImage(props) {
  return (
    <Fragment>
      <img
        src={props.img}
        style={{
          maxWidth: "250px",
          maxHeight: "250px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
        alt="detailImg"
      />
    </Fragment>
  );
}

export default DetailImage;
