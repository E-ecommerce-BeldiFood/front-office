import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { OrderItemResponse } from '../../models/order-item-response.model';
import { ProductDtoResponse } from '../../models/product-dto-response.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: ProductDtoResponse[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;


  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.loadCart();
    
  }

  loadCart(): void {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.items = cartItems;
    this.items = this.shoppingCartService.getItems();
    this.totalQuantity = this.shoppingCartService.getTotalQuantity();
    this.totalPrice = this.shoppingCartService.getTotalPrice(); 
  }

  addItemToCart(item: ProductDtoResponse): void {
    this.shoppingCartService.addToCart(item);
    // Get the current cart items from the shopping cart service
    const cartItems = this.shoppingCartService.getItems();
    // Store the updated cart items in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.loadCart();
  }

  removeItemFromCart(itemId: number): void {
    this.shoppingCartService.removeItem(itemId);
     // Retrieve the current cart items from local storage
     const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

     // Remove the item with the specified id
     const updatedCartItems = cartItems.filter((item: any) => item.id !== itemId);
 
     // Store the updated cart items back to local storage
     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
 
     // Refresh the cart (assuming loadCart updates the UI or internal state)
     this.loadCart();
  }
  
  decrementOrRemove(itemId: number): void {
    this.shoppingCartService.decrementOrRemove(itemId);

    this.loadCart();
  }

  clearCart(): void {
    this.shoppingCartService.clearCart();
    this.loadCart();
  }
}
