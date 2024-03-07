import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sty from "./LogIn.module.css";

export default function LogIn() {
  const [data, setData] = useState({
    mail: "",
    pass: "",
  });
  const navi = useNavigate();
  function hanldeOutput(e) {
    e.preventDefault();
    if (localStorage.getItem(`${data.mail}`) === null) {
      alert(`Email is not valid!!
Please check your credentials
        or
Please Sign Up!!`);
    } else {
      let obj = JSON.parse(localStorage.getItem(`${data.mail}`));
      if (data.mail === obj.mail && data.pass === obj.pass) {
        alert(`welcome ${obj.user}!!`);
        navi("/HomePage");
      } else {
        alert("Email or Password is not valid");
      }
    }
  }
  return (
    <div className={sty.Par}>
      <h1>LogIn</h1>
      <form onSubmit={hanldeOutput}>
        <br />
        <label htmlFor="mail" id="lmail" className={sty.lbl}>
          Email :
        </label>
        <input
          type="email"
          id="mail"
          placeholder="Enter Your Email address"
          value={data.mail}
          className={sty.in}
          onChange={(e) => setData({ ...data, mail: e.target.value })}
          style={{ width: "150px" }}
        />
        <br />
        <label htmlFor="Pass" className={sty.lbl}>
          Password :
        </label>
        <input
          type="password"
          id="Pass"
          value={data.pass}
          className={sty.in}
          placeholder="  Enter Your Password"
          onChange={(e) => setData({ ...data, pass: e.target.value })}
        />
        <button className={sty.btn}>Log In</button>
        <h3 className={sty.ex}>
          New user :{" "}
          <Link to="/" style={{ color: "white" }}>
            Sign Up
          </Link>
        </h3>
      </form>
    </div>
  );
}
