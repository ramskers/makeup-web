import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Schedule.css";

//Material UI Icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeOutlinedIIcon from "@mui/icons-material/YouTube";
import InstagramOutlinedIIcon from "@mui/icons-material/Instagram";
import TwitterOutlinedIIcon from "@mui/icons-material/Twitter";

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
    <div class="container" id="book">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">BOOK NOW</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
              <img src="img/location.png" class="icon" alt="" />
              <p>Samantha O'Neill</p>
            </div>
            <div class="information">
              <img src="img/email.png" class="icon" alt="" />
              <a class="information" href="mailto:ramtin123@gmail.com">
                ramtin123@gmail.com
              </a>
            </div>
            <div class="information">
              <img src="img/phone.png" class="icon" alt="" />
              <a class="information" href="tel:941-243-8452">
                (941) 243 8452
              </a>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with me :</p>
            <div class="social-icons">
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
        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form ref={form} onSubmit={sendEmail}>
            <h3 class="title">Contact Me</h3>
            <div class="input-container">
              <input type="text" name="user_name" class="input" />
              <label for="">Name</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="user_email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone_number" class="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="info-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};
