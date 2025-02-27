<?php

require '../src/ApiClient.php';
require '../src/Cart.php';
require '../src/ProductService.php';

// Exemple d'utilisation basique
$cart = new Cart();
$cart->addItem(['id' => 1, 'price' => 20, 'quantity' => 2]);
$cart->addItem(['id' => 2, 'price' => 10, 'quantity' => 3]);

echo "Total du panier : " . $cart->calculateTotal();  // Affiche 145
