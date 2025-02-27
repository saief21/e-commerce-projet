<?php

use PHPUnit\Framework\TestCase;
use App\Cart;


class CartTest extends TestCase {

    public function testCalculateTotal() {
        // Panier d'exemple avec 3 produits
        $cart = new Cart();
    $cart->addItem(['id' => 1, 'price' => 50, 'quantity' => 2]); 
    $cart->addItem(['id' => 2, 'price' => 15, 'quantity' => 3]); 

    $this->assertEquals(145, $cart->calculateTotal());
    }

    public function testRemoveItem() {
        $cart = new Cart();
        $cart->addItem(['id' => 1, 'price' => 20, 'quantity' => 2]);
        $cart->removeItem(1);
        
        // Vérifie que le panier est vide après suppression
        $this->assertEmpty($cart->getItems());
    }
}
