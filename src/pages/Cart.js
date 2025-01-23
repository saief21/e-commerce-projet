import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  // Calcul du total du panier
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Gérer la modification de la quantité d'un produit
  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div>
      <h1>Mon Panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          {/* Affichage des produits du panier */}
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <h4>{product.title}</h4>
              <img src={product.image} alt={product.title} style={{ width: "100px" }} />
              <p>Prix : {product.price} €</p>

              {/* Modification de la quantité */}
              <input
                type="number"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 0)}
                min="1"
              />

              {/* Bouton pour retirer le produit du panier */}
              <button onClick={() => removeFromCart(product.id)}>Retirer</button>
            </div>
          ))}

          {/* Affichage du total */}
          <h3>Total : {total.toFixed(2)} €</h3>

          {/* Bouton pour finaliser la commande */}
          <button onClick={() => alert("Commande finalisée !")}>Finaliser la commande</button>
        </div>
      )}
    </div>
  );
}

export default Cart;



