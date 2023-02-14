import React, { useEffect, useState } from "react";
import google from "../../Assets/images/google.png";
import Modal from "react-bootstrap/Modal";
import { loadWeb3 } from "../../apis/api";

function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4 className="title">Welcome to Fantra</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body2">
          <div className="close" data-dismiss="modal2" aria-label="Close"></div>
          <div className="log-reg-inner">
            <div className="main-content">
              <form action="#">
                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    className="my-form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="text"
                    className="my-form-control"
                    placeholder="Enter Your Password"
                  />
                </div>
                <p className="f-pass">
                  Forgot your password? <a href="#">recover password</a>
                </p>
                <div className="button-wrapper">
                  <button type="submit" className="custom-button2">
                    Sign In
                  </button>
                </div>
                <div className="or log">
                  <p>OR</p>
                </div>
                <div className="or-content">
                  <p>Sign up with your email</p>
                  <a href="#" className="or-btn">
                    <img src={google} alt="" /> Sign Up with Google
                  </a>
                  <p className="or-signup">
                    Don't have an account?{" "}
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#registerModal"
                    >
                      Sign up here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const Connect_wallet_modal = () => {
  const [modalShow2, setModalShow2] = React.useState(false);
  let [btnTxt, setBtTxt] = useState("Connect Wallet");
  const getaccount = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      // toast.error('please install metamask')
      setBtTxt("Install metamask");
    } else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setBtTxt(myAcc);
    }
  };
  useEffect(() => {
    getaccount()
  });

  return (
    <div>
      <div className="right-area">
        <div className="log-reg-area" variant="">
          <a
            onClick={getaccount}
            // onClick={() => setModalShow2(true)}
            href="#"
            class="custom-button2 navmainbt"
            data-toggle="modal"
            data-target="#loginModal"
          >
            {btnTxt}
          </a>
          <MyVerticallyCenteredModal2
            show={modalShow2}
            onHide={() => setModalShow2(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Connect_wallet_modal;
