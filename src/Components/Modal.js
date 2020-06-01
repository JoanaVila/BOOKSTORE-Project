import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  console.log(props);
  return (
    <div>
      <Button color="danger" onClick={toggle}>click here</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Description</ModalHeader>
        <ModalBody>
            <img src = {props.myPicture} width = "300px"/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Close</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ModalExample;