<?php
namespace App;


class ProductService {
    private $apiClient;

    // Constructeur qui reçoit un client API (peut être un mock pour les tests)
    public function __construct($apiClient) {
        $this->apiClient = $apiClient;
    }

    // Récupérer les produits depuis l'API
    public function getProductsFromApi() {
        return $this->apiClient->get('/products');
    }
}
