import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Schedule.css";

//Material UI Icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeOutlinedIIcon from "@mui/icons-material/YouTube";
import InstagramOutlinedIIcon from "@mui/icons-material/Instagram";
import TwitterOutlinedIIcon from "@mui/icons-material/Twitter";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const Schedule = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lsw7x8m",
        "template_m5uou4m",
        form.current,
        "zZBYChGUolbxdNk2w"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  return (
    <div>
      <div className="container" id="book">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">BOOK NOW</h3>
            <p className="text">
              Please note, travel and accommodation expenses may be required.
            </p>

            <div className="info">
              <div className="information">
                <MapOutlinedIcon className="icon" />
                <p>Clearwater, Florida</p>
              </div>
              <div className="information">
                <EmailOutlinedIcon className="icon" alt="" />
                <a className="information" href="mailto:ramtin123@gmail.com">
                  ramtin123@gmail.com
                </a>
              </div>
              <div className="information">
                <PhoneIphoneOutlinedIcon className="icon" alt="" />
                <a className="information" href="tel:941-243-8452">
                  (941) 243 8452
                </a>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with me :</p>
              <div className="social-icons">
                <a href="#">
                  <FacebookOutlinedIcon />
                </a>
                <a href="#">
                  <TwitterOutlinedIIcon />
                </a>
                <a href="#">
                  <InstagramOutlinedIIcon />
                </a>
                <a href="#">
                  <YouTubeOutlinedIIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form ref={form} onSubmit={sendEmail}>
              <h3 className="title">Contact Me</h3>
              <div className="input-container">
                <input type="text" name="user_name" className="input" />
                <label htmlFor="">Name</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="user_email" className="input" />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone_number" className="input" />
                <label htmlFor="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="info-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
