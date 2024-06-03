import { Component, Input } from '@angular/core';
import { ProductDtoResponse } from 'src/app/models/product-dto-response.model';
import { ProductService } from 'src/app/services/product.service';

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

  constructor(private productService: ProductService) { }

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

  updateDisplayedProducts(): void {
    this.displayedProducts = this.showAll ? this.products : this.products.slice(0, this.initialDisplayCount);
  }


}
