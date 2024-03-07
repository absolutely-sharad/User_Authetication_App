# User Authentication App with React

Welcome to the User Authentication App with React tutorial! This project provides a simple authentication system where users can sign up or log in to access the main screen. The project is built using React and demonstrates the fundamentals of creating a user authentication system.

## Project Overview

The project includes the following components:

### App.js

```jsx
import React from "react";
import SignUpForm from "./Components/SignUpForm";
import LogIn from "./Components/LogIn";
import { Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from "./Components/HomePage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </div>
  );
}
```

### SignUpForm.js

```jsx
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
      {/* ... (form structure) ... */}
      <form onSubmit={hanldeInput}>
        {/* ... (form fields) ... */}
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
```

### LogIn.js

```jsx
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
      {/* ... (form structure) ... */}
      <form onSubmit={hanldeOutput}>
        {/* ... (form fields) ... */}
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
```

### HomePage.js

```jsx
import React from "react";
import sty from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <nav className={sty.par}>
        {/* ... (navigation structure) ... */}
        <ul className={sty.Nav_Container}>
          {/* ... (navigation links) ... */}
          <Link to="/login">
            <li className={sty.Nav_items}>
              <i class="fa-solid fa-address-card" />
              <div className={sty.nav_names}>Sign Out</div>
            </li>
          </Link>
        </ul>
      </nav>
      <h1 className={sty.content}>This Is Home Page !!</h1>
    </div>
  );
}
```

## Features

- **User Sign-Up:** Users can sign up by providing a unique username, password, phone number, and email address.
- **User Log-In:** Existing users can log in with their email and password.
- **Redirect to Main Screen:** Upon successful sign-up or log-in, users are redirected to the main screen (HomePage).
- **Email Validation:** Checks if the provided email is unique; a user with the same email cannot sign up again.

## How to Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following commands:
   ```bash
   npm install
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Visit the application at [http://localhost:3000](http://localhost:3000).
2. Sign up with a unique username, password, phone number, and email.
3. Log in using your email and password.
4. Explore the main screen (HomePage) with navigation options.

## Important Notes

- Do not directly copy and paste the code. Understand each line and customize it for your project.
- Feel free to experiment with the code to enhance your learning.

## Technologies Used

- React
- React Router DOM
- HTML
- CSS

## Contributing

Feel free to contribute to the project by submitting pull requests or opening issues. Contributions are welcome!

Happy coding! 🚀✨


