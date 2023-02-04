import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import logo from "../../Assets/images/logo.png";
import google from "../../Assets/images/google.png";
import cart from "../../Assets/images/cart.png";
import "./Header.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4 className="title">Create an Account</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body">
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
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="text"
                    className="my-form-control"
                    placeholder="Enter Your Confirm Password"
                  />
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" for="customCheck1">
                    I agree to the{" "}
                    <a href="#">Terms, Privacy Policy and Fees</a>
                  </label>
                </div>
                <div className="button-wrapper">
                  <button type="submit" className="custom-button2">
                    Register Now
                  </button>
                  <p className="or-signup">
                    Already have an account?{" "}
                    <a href="#" data-toggle="modal" data-target="#loginModal">
                      Login
                    </a>
                  </p>
                </div>
                <div className="or">
                  <p>OR</p>
                </div>
                <div className="socials">
                  <a href="#">
                    <i className=""><FaFacebookF /></i>
                  </a>
                  <a href="#">
                    <i className=""><AiOutlineTwitter /></i>
                  </a>
                  <a href="#">
                    <i className=""><AiOutlineGoogle /></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

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
            <h4 className="title">
                            Welcome to Fantra
                        </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body2">
                    <div className="close" data-dismiss="modal2" aria-label="Close">
                    </div>
                    <div className="log-reg-inner">
                       
                        <div className="main-content">
                            <form action="#">
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input type="email" className="my-form-control" placeholder="Enter Your Email"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" className="my-form-control" placeholder="Enter Your Password"/>
                                </div>
                                <p className="f-pass">
                                    Forgot your password? <a href="#">recover password</a>
                                </p>
                                <div className="button-wrapper">
                                    <button type="submit" className="custom-button2">Sign In</button>
                                </div>
                                <div className="or log">
                                    <p>OR</p>
                                </div>
                                <div className="or-content">
                                    <p>Sign up with your email</p>
                                    <a href="#" className="or-btn"><img src={google} alt=""/> Sign Up with
                                        Google</a>
                                    <p className="or-signup">
                                        Don't have an account? <a href="#" data-toggle="modal"
                                            data-target="#registerModal">
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



function Header() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  return (
    <div>
      <header className="top-header">
        <div className="header-top-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-top-area-inner">
                  <a href="" className="logo">
                    <img src={logo} alt="" />
                  </a>
                  <div className="right-area">
                    <div
                      className="log-reg-area"
                      variant=""
                      
                    >
                      <a
                      onClick={() => setModalShow(true)}
                        href="#"
                        className="custom-button1"
                        data-toggle="modal"
                        data-target="#registerModal"
                      >
                        Register
                      </a>

                      <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />

                    

                
                      <a
                      onClick={() => setModalShow2(true)}
                        href="#"
                        className="custom-button2"
                        data-toggle="modal"
                        data-target="#loginModal"
                      >
                        Log In
                      </a>
<MyVerticallyCenteredModal2
                    show={modalShow2}
                    onHide={() => setModalShow2(false)}
                  />
                      </div>

                      <div className="cart-area">
                      <div className="icon">
                        <img src={cart} alt="" />
                        <span>06</span>
                      </div>
                      <div className="amount">
                        <h4 className="mony">$ 23.60</h4>
                        <p>To checkout</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-section">
          <div className="container">
            <div className="header-wrapper">
              <ul className="menu">
              <Link to="/"><li>
                  <a href="" className="">
                    Home
                  </a>
                </li>
                </Link>
                <Link to="/Lottery"> <li>
                  <a >Lottery</a>
                </li>
                </Link>
                <Link to="/Results"><li>
                  <a href="">Results</a>
                </li>
                </Link>
                <Link to="/About">
                <li>
                  <a href="">About</a>
                </li>
                </Link>
                <Link to="/Faq">
                <li>
                  <a href="">Faq</a>
                </li>
                </Link>
                <li>
                  <a href="#">
                    Blog <i className="fa firsti"><IoIosArrowDown /></i>
                  </a>
                  <ul className="submenu">
                    <Link to="/Blog">
                    <li>
                      <a href="blog.html">Blog </a>
                    </li>
                    </Link>
                    <Link to="/Blog_details">
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                    </Link>
                  </ul>
                </li>
                <Link to="/Contact">
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                </Link>
              </ul>
              <div className="right-tools">
                <select className="select-bar">
                  <option value="">BTC</option>
                  <option value="">BDT</option>
                  <option value="">USD</option>
                </select>
                <select className="select-bar">
                  <option value="">EN</option>
                  <option value="">IN</option>
                  <option value="">BN</option>
                </select>
              </div>
              <div className="header-bar d-lg-none">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
