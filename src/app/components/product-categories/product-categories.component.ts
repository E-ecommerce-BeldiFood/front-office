// src/app/product-categories/product-categories.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryResponseDto, ProductService } from 'src/app/services/product.service';





@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  categories: CategoryResponseDto[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
