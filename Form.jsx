import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let formErrors = {};
    let valid = true;

    if (name.trim() === "") {
      formErrors.name = "Name is required";
      valid = false;
    }

    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailPattern = '@';
    if (!email.match(emailPattern)) {
      formErrors.email = "Enter a valid email";
      valid = false;
    }

    if (password.length < 8) {
      formErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setError(formErrors);

    if (valid) {
      setSuccess("Form submitted successfully!");
      console.log({ name, email, password });
      // clear fields
      setName("");
      setEmail("");
      setPassword("");
    } else {
      setSuccess("");
    }
  }

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>

        <div>
          <label>Email: </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>

        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default Form;
