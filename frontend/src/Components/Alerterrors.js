import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";

const Alerterrors = () => {
  const errors = useSelector((state) => state.authReducer.errors);
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <div>
      {errors.map((el, idx) => (
        <Toast
          className="d-inline-block m-1"
          bg="danger"
          key={idx}
          show={showA}
          onClose={toggleShowA}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body className={el === "Dark" && "text-white"}>
            {el.msg}
          </Toast.Body>
        </Toast>
      ))}
    </div>
  );
};

export default Alerterrors;
