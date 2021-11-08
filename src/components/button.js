import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { submitbutton } from "../featues/colorarray";
import { useDispatch, useSelector } from "react-redux";
import { idchange } from "../featues/colorreducer";

function Buttondiv() {
  const [disabled, setdisabled] = useState(false);
  const [show, setshow] = useState(false);

  const colorvalue = useSelector((state) => state.color.value);
  const dispatch = useDispatch();
  const Submitform = () => {
    if (disabled) {
      dispatch(submitbutton(colorvalue));
      setshow(true);
    } else {
      return alert("please confirm first");
    }

    setdisabled(false);
  };

  const confirm = () => {
    dispatch(idchange(uuidv4()));
    setdisabled(true);
  };

  const hide = () => setshow(false);

  return (
    <Btndiv>
      <Button
        size="lg"
        className="p-2"
        disabled={disabled}
        variant="danger"
        onClick={confirm}
      >
        confirm Pallete
      </Button>
      <Button size="lg" className="p-2" variant="danger" onClick={Submitform}>
        Make Pallete
      </Button>
      <Modal show={show} onHide={hide} style={{color:"#000 !important"}}>
        <Modal.Header closeButton>
          <Modal.Title color="#000"><h3 >Confirmed</h3> </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:"#000 !important",fontSize:"2rem"}}>Your pallete has been generated</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hide} size="lg">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </Btndiv>
  );
}

const Btndiv = styled.div`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h3{
      
      color: #000 !important;
  }
`;

export default Buttondiv;
