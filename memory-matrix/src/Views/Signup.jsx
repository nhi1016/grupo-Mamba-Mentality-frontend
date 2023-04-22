import React, { useState } from "react";
import '../Styles/Signup.css'

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="signup-container">
      <form>
        <h2>Crear cuenta</h2>
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
        <label>
          Repetir contraseña:
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </label>
        {/* <button type="submit">Registrarse</button> */}
        <a href="/">
          <div className="boton-signup">Registrate</div>
        </a>
      </form>
    </div>
  );
}

export default Signup;
