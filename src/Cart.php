<?php

namespace App;


class Cart {
    private $items = [];

    // Ajouter un produit au panier
    public function addItem($product) {
        $this->items[] = $product;
    }

    // Calcul du total du panier
    public function calculateTotal() {
        $total = 0;
        foreach ($this->items as $item) {
            $total += $item['price'] * $item['quantity'];
        }
        return $total;
    }
    // Récupérer les éléments du panier
    public function getItems() {
        return $this->items;
    }

    // Supprimer un produit du panier
    public function removeItem($productId) {
        foreach ($this->items as $index => $item) {
            if ($item['id'] == $productId) {
                unset($this->items[$index]);
            }
        }
    }
}

