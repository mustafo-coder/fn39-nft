import React from "react";
import Img from "../assets/contactPage.svg";
import Img1 from "../assets/EnvelopeSimple.svg";
import Img2 from "../assets/LockKey.svg";
import Img3 from "../assets/User.svg";

export default function ContactPage() {
  return (
    <div className="">
      <div>
        <img className="" src={Img} alt="" />
      </div>

      <div className="">
        <h1 className="">Create account</h1>
        <p className="">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <div className="rounded-lg">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password    " />
        </div>
        <button className="">
          <a href="#">Create account</a>
        </button>
      </div>
    </div>
  );
}
