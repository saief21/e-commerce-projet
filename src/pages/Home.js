import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext"; // Importer le contexte
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { addToCart, cart } = useContext(CartContext); // Accéder au panier et à la fonction d'ajout

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || product.category === selectedCategory)
  );

  return (
    <div>
      <h1>Page d'accueil</h1>
      <div>
        <Link to="/cart">
          <button>
            Panier ({cart.length} articles)
          </button>
        </Link>
      </div>

      {/* Affichage du nombre d'articles dans le panier */}
      <div>
        <h2>Nombre d'articles dans le panier: {cart.length}</h2>
      </div>

      <input
        type="text"
        placeholder="Rechercher un produit..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Toutes les catégories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.price} €</p>
            <button onClick={() => addToCart(product)}>Ajouter au panier</button>       
            <Link to={`/product/${product.id}`} className="product-details-button">
              <button>Détails</button>
            </Link> 
          </div>
        ))}
      </div>
      <footer className="footer">
        <p>Saief-allah Ben Romdhane. - IPSSI Nice</p>
      </footer>
    </div>
  );
}

export default Home;

