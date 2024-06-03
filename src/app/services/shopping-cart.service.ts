import { Injectable } from '@angular/core';
import { ProductDtoResponse } from '../models/product-dto-response.model';
import { OrderItemRequest } from '../models/order-item-request.model';
import { OrderStatus } from '../models/order-status.enum';
import { OrderRequest } from '../models/order-request.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private items: ProductDtoResponse[] = [];

  constructor() {
    // Load cart items from local storage when the service is initialized
    this.loadCartFromLocalStorage();
  }

  private loadCartFromLocalStorage() {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.items = storedCartItems;
  }

  private saveCartToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  
  addToCart(item: ProductDtoResponse): void {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1
      const newItem = { ...item, quantity: 1 };
      this.items.push(newItem);
    }
    this.saveCartToLocalStorage(); // Save cart to local storage after modification
  }
 
  

  getItems(): ProductDtoResponse[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
    this.saveCartToLocalStorage(); // Save cart to local storage after modification
  }

  removeItem(itemId: number): void {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.saveCartToLocalStorage(); // Save cart to local storage after modification
    }
  }
  
  decrementOrRemove(itemId: number): void {
    const index = this.items.findIndex(item => item.id === itemId);
    if (index !== -1) {
      if (this.items[index].quantity === 1) {
        this.items.splice(index, 1);
      } else if (this.items[index].quantity > 1) {
        this.items[index].quantity -= 1;
      }
      this.saveCartToLocalStorage(); // Save cart to local storage after modification
    }
  }

  getTotalQuantity(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  /*transferToOrderRequest(customerId: number): OrderRequest {
    const orderItems: OrderItemRequest[] = this.items.map(item => ({
      itemId: null,
      productId: item.id,
      quantity: item.quantity
    }));
    // You may need to generate orderId dynamically or fetch it from elsewhere
    const orderId: number = 1; // For example
    return {
      customerId: customerId,
      orderId: orderId,
      orderItemsRequests: orderItems,
      status: OrderStatus.PENDING // You may need to adjust this based on your requirements
    };
  }*/
}


