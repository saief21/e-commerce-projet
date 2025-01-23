import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          alert("Connexion réussie !");
        } else {
          alert("Échec de la connexion !");
        }
      });
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>Bienvenue, {username} !</p>
      ) : (
        <form>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Se connecter
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
