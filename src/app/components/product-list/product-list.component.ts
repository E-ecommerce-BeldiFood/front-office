import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { ProductDtoResponse } from 'src/app/models/product-dto-response.model';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductDtoResponse[] = [];
  

  constructor(private productService: ProductService,
              private shoppingCartService: ShoppingCartService,
              private toastr: ToastrService,) { }

  
 
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });  
  }


  addToCart(product: ProductDtoResponse) {
    this.shoppingCartService.addToCart(product);
    this.toastr.success("Product added to cart successfully");

    // Get the current cart items from the shopping cart service
    const cartItems = this.shoppingCartService.getItems();
    // Store the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
}
