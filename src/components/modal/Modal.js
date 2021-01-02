import React from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import payment from "../../Assets/payment.gif";

import './Modal.css'


const ModalComponent = ({ isModalOpen, onCloseModal }) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={onCloseModal}
      center
      classNames={{
        overlayAnimationIn: "customEnterOverlayAnimation",
        overlayAnimationOut: "customLeaveOverlayAnimation",
        modalAnimationIn: "customEnterModalAnimation",
        modalAnimationOut: "customLeaveModalAnimation",
        modal: "customModal",
      }}
      animationDuration={800}
    >
      <div>
        <div style={{ width: "100%" }}>
          <img
            src={payment}
            alt=""
            style={{
              width: "100%",
              marginTop: "0",
              marginBottom: "0",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          />
        </div>
        <div className="my-4" style={{ textAlign: "center" }}>
          <h4>Your Order is Successfull</h4>
          <h5>We now have time to get ourselves a lamborghini</h5>
          <h2>THANK YOU!!!</h2>
        </div>
      </div>
    </Modal>
  );
};


export default ModalComponent;