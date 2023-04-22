import React, { useState } from "react";
import '../Styles/Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <label>
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <a href="/">
          {/* <button type="submit" onClick={handleClick}>Log In</button> */}
          <div className="boton-login">Log In</div>
        </a>
      </form>
    </div>
  );
}

export default Login;