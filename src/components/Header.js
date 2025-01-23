import React, { useContext } from "react";
import { CartContext } from "../context/CartContext"; // Importer le contexte
import { Link } from "react-router-dom";

function Header() {
  const { cart } = useContext(CartContext); // Accéder au panier

  return (
    <header>
      <h1>Mon E-commerce</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/cart">
          Panier ({cart.length}) {/* Afficher le nombre d'articles dans le panier */}
        </Link>
      </nav>
    </header>
  );
}

export default Header;


