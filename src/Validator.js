import { useState } from "react";

export default function Validator() {
  const intialState = { username: "", password: "", confirmpassword: "" };

  const [formState, setFormState] = useState(intialState);

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.password === "") {
      alert("Please enter your information");
    } else if (formState.username === "") {
      alert("Please enter your information");
    } else if (formState.password === formState.confirmpassword) {
      alert("Welcome");
    } else {
      alert("Wrong password");
    }
  };
  return (
    <div>
      <h1> Sign UP </h1>
      <form onSubmit={handleSubmit}>
        {" "}
        <label htmlFor="name">Your Name</label>
        <br></br>
        <br></br>
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          onChange={handleChange}
          value={formState.username}
        />
        <br />
        <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
        <br></br>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={formState.password}
        />
        <br></br>
        <br></br>
        <label htmlFor="confirm">Confirm Password</label>
        <br></br>
        <br></br>
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          placeholder="confirm password"
          onChange={handleChange}
          value={formState.confirmpassword}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
