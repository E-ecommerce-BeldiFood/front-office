import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Toast, ToastrService } from 'ngx-toastr';
import { ProductDtoResponse } from 'src/app/models/product-dto-response.model';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 // Define the number of initially displayed products
 initialDisplayCount: number = 4;
 showAll: boolean = false;

  products: ProductDtoResponse[] = [];

  // Slice the products array based on the initial display count
  get displayedProducts(): any[] {
    return this.showAll ? this.products : this.products.slice(0, this.initialDisplayCount);
  }
  

  constructor(private productService: ProductService,
              private shoppingCartService: ShoppingCartService,
              private toastr: ToastrService,) { }

  
 
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
        // Limit the number of products to 4
        this.products = data.slice(0, 4);
    });  
  }

  addToCart(product: ProductDtoResponse, event: MouseEvent ): void {
    this.shoppingCartService.addToCart(product);
    this.toastr.success("Product added to cart successfully");
      // Add the "clicked" class to the button
      const button = event.target as HTMLElement;
      button.classList.add('clicked');
  }
  
  /*
  addToCart(product: ProductDtoResponse) {
    this.shoppingCartService.addToCart(product);
    this.toastr.success("Product added to cart successfully");
  
    // Get the current cart items from the shopping cart service
    //const cartItems = this.shoppingCartService.getItems();
    // Store the updated cart items in local storage
    //localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  */
 

}
