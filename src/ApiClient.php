<?php
namespace App;

class ApiClient {
    // Simuler une requête GET vers une API
    public function get($endpoint) {
        // Retourne des données simulées pour l'exemple
        return [
            ['id' => 1, 'name' => 'Product 1', 'price' => 20],
            ['id' => 2, 'name' => 'Product 2', 'price' => 15],
        ];
    }
}
