import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-shopping-cart-dropdown',
  templateUrl: './shopping-cart-dropdown.component.html',
  styleUrls: ['./shopping-cart-dropdown.component.css']
})
export class ShoppingCartDropdownComponent {
  itemCount: number = 2; // Initialize with the number of items in the cart
  totalPrice: number = 134.00; // Initialize with the total price of the items in the cart

  // Methods to add and remove items from the cart
  addItemToCart() {
    // Add logic to add an item to the cart
    this.itemCount++;
    // Add logic to update the total price
    this.totalPrice += 34;
  }

  removeItemFromCart() {
    // Add logic to remove an item from the cart
    if (this.itemCount > 0) {
      this.itemCount--;
      // Add logic to update the total price
      this.totalPrice -= 7;
    }
  }

}
