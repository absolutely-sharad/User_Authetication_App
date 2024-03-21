import React, { useState } from "react";
import style from "./SignUpForm.module.css";
import { Link, useNavigate } from "react-router-dom";
export default function SignUpForm() {
  const [data, setData] = useState({
    user: "",
    pass: "",
    num: "",
    mail: ""
  });
  const nav = useNavigate();
  function hanldeInput(e) {
    e.preventDefault();
    if (localStorage.getItem(`${data.mail}`) === null) {
      localStorage.setItem(`${data.mail}`, JSON.stringify(data));
      alert(`Details Saved Successfully!!`);
        nav("/HomePage");
    } else {
      alert("A User With This Email Already Exists. Please Log In");
    }
  }
  return (
    <div className={style.Parent}>
      <h1>SignUp Form</h1>
      <form onSubmit={hanldeInput}>
        <label htmlFor="UserName">Username : </label>
        <input
          type="text"
          id="UserName"
          value={data.user}
          className={style.in}
          placeholder="  Enter Your User Name"
          onChange={(e) => setData({ ...data, user: e.target.value })}
        />
        <br />
        <label htmlFor="Pass">Password : </label>
        <input
          type="password"
          id="Pass"
          value={data.pass}
          className={style.in}
          placeholder="  Enter Your Password"
          onChange={(e) => setData({ ...data, pass: e.target.value })}
        />
        <br />
        <label htmlFor="Num">Phone No : </label>
        <input
          type="text"
          id="Num"
          placeholder="  Enter Your Number"
          value={data.num}
          className={style.in}
          onChange={(e) => setData({ ...data, num: e.target.value })}
        />
        <br />
        <label htmlFor="mail" id="lmail">
          Email ID :  </label>
        <input
          type="email"
          id="mail"
          placeholder="Enter Your Email address"
          value={data.mail}
          className={style.in}
          onChange={(e) => setData({ ...data, mail: e.target.value })}
          style={{ width: "250px" }}
        />
        <br />
        <button>SignUp</button>

        <h3 className={style.extra}>
          Already a user :{" "}
          <Link to="/login" style={{ color: "white" }}>
            Log In
          </Link>
        </h3>
      </form>
    </div>
  );
}
