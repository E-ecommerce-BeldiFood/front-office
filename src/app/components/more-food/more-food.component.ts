import { Component, Input } from '@angular/core';
import { ProductDtoResponse } from 'src/app/models/product-dto-response.model';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-more-food',
  templateUrl: './more-food.component.html',
  styleUrls: ['./more-food.component.css']
})
export class MoreFoodComponent {

  @Input() initialDisplayCount: number = 4;

  products: ProductDtoResponse[] = [];
  displayedProducts: ProductDtoResponse[] = [];
  showAll: boolean = false;

  constructor(private productService: ProductService ,private shoppingCartService: ShoppingCartService, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.updateDisplayedProducts();
    });
  }

  loadMore(): void {
    this.showAll = true;
    this.updateDisplayedProducts();
  }

  addToCart(product: ProductDtoResponse, event: MouseEvent ): void {
    this.shoppingCartService.addToCart(product);
    setTimeout(() => {
      this.toastr.success("Product added to cart successfully", "Success", {
        timeOut: 5000, // Set the timeout duration
        closeButton: true, // Show close button
        progressBar: true, // Show progress bar
      });
    }, 500); 
  
    // Add the "clicked" class to the button
    const button = event.target as HTMLElement;
    button.classList.add('clicked');
  }

  updateDisplayedProducts(): void {
    this.displayedProducts = this.showAll ? this.products : this.products.slice(0, this.initialDisplayCount);
  }


}
