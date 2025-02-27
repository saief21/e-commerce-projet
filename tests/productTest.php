<?php

use PHPUnit\Framework\TestCase;
use App\ProductService;
use App\ApiClient;


class ProductTest extends TestCase {

    public function testGetProductsFromApi() {
        // Mock d'un client API pour simuler la réponse de l'API
        $mockApiClient = $this->createMock(ApiClient::class);
        $mockApiClient->method('get')
                      ->willReturn([
                          ['id' => 1, 'name' => 'Product 1', 'price' => 20],
                          ['id' => 2, 'name' => 'Product 2', 'price' => 15],
                      ]);

        // Utilisation du mock dans le service produit
        $productService = new ProductService($mockApiClient);
        $products = $productService->getProductsFromApi();

        // Vérification du nombre de produits et de leurs noms
        $this->assertCount(2, $products);
        $this->assertEquals('Product 1', $products[0]['name']);
    }
}

