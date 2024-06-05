import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductDtoResponse } from '../models/product-dto-response.model';
import { CategoryResponseDto } from '../models/CategoryResponseDto';
import { ProductDtoRequest } from '../models/product-dto-request.model';
import { Page } from '../models/page.model';
import { Subcategory } from '../models/Subcategory';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;
  private productApiUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  // Category methods
  getCategories(): Observable<CategoryResponseDto[]> {
    return this.http.get<CategoryResponseDto[]>(`${this.apiUrl}/categories`);
  }

  // Subcategory methods
  getAllSubcategories(): Observable<Subcategory[]> {
    return this.http.get<Subcategory[]>(`${this.apiUrl}/subcategories`);
  }

  searchSubcategories(name: string): Observable<Subcategory[]> {
    let params = new HttpParams().set('name', name);
    return this.http.get<Subcategory[]>(`${this.apiUrl}/subcategories/search`, { params });
  }

  // Product methods
  getAllProducts(): Observable<ProductDtoResponse[]> {
    return this.http.get<ProductDtoResponse[]>(`${this.apiUrl}/products`);
  }

  getProductReviews(productId: number): Observable<ProductDtoResponse> {
    return this.http.get<ProductDtoResponse>(`${this.productApiUrl}/${productId}/reviews`);
  }

  createProduct(productDtoRequest: ProductDtoRequest, productImage: File): Observable<ProductDtoResponse> {
    const formData = new FormData();
    formData.append('product', JSON.stringify(productDtoRequest));
    formData.append('productImage', productImage);
    return this.http.post<ProductDtoResponse>(this.productApiUrl, formData);
  }

  getProductById(id: number): Observable<ProductDtoResponse> {
    return this.http.get<ProductDtoResponse>(`${this.productApiUrl}/${id}`);
  }

  updateProduct(id: number, productDtoRequest: ProductDtoRequest, productImage: File): Observable<ProductDtoResponse> {
    const formData = new FormData();
    formData.append('product', JSON.stringify(productDtoRequest));
    formData.append('productImage', productImage);
    return this.http.put<ProductDtoResponse>(`${this.productApiUrl}/${id}`, formData);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.productApiUrl}/${id}`);
  }

  getProductsByCategory(categoryId: number): Observable<ProductDtoResponse[]> {
    return this.http.get<ProductDtoResponse[]>(`${this.productApiUrl}/by-category/${categoryId}`);
  }

  getProductsBySubcategory(subcategoryId: number): Observable<ProductDtoResponse[]> {
    return this.http.get<ProductDtoResponse[]>(`${this.productApiUrl}/by-subcategory/${subcategoryId}`);
  }

  searchAndFilterProducts(minPrice: number, maxPrice: number, subCategoryName: string): Observable<ProductDtoResponse[]> {
    let params = new HttpParams()
      .set('minPrice', minPrice.toString())
      .set('maxPrice', maxPrice.toString())
      .set('subCategoryName', subCategoryName);
    return this.http.get<ProductDtoResponse[]>(`${this.productApiUrl}/search-and-filter`, { params });
  }

  searchProducts(query: string): Observable<ProductDtoResponse[]> {
    let params = new HttpParams().set('query', query);
    return this.http.get<ProductDtoResponse[]>(`${this.productApiUrl}/search`, { params });
  }

  getProductsWithPagination(pageNumber: number, pageSize: number, field: string, order: string): Observable<Page<ProductDtoResponse>> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString())
      .set('field', field)
      .set('order', order);
    return this.http.get<Page<ProductDtoResponse>>(`${this.productApiUrl}/pagination`, { params });
  }
}
export { CategoryResponseDto };

