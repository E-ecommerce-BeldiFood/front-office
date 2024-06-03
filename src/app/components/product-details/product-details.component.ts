import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDtoResponse } from 'src/app/models/product-dto-response.model';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product!: ProductDtoResponse;
  quantity: number = 1; // Default quantity

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(productId).subscribe((data: ProductDtoResponse) => {
      this.product = data;
    });
  }

  incrementQuantity() {
    this.quantity++;
    this.updateCart(); // Update the cart whenever the quantity changes
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateCart(); // Update the cart whenever the quantity changes
    }
  }

  updateCart() {
    const productToAdd = { ...this.product, quantity: this.quantity };
    this.shoppingCartService.addToCart(productToAdd);
  }

  addToCart() {
    // This method can now be simplified if desired since the cart is updated on quantity change
    this.updateCart();
  }
}
