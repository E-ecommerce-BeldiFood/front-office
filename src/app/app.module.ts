import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { SharedModule } from './shared/shared.module';
import { ShoppingCartDropdownComponent } from './components/navbar/shopping-cart-dropdown/shopping-cart-dropdown.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor.spec';
import { UserServiceService } from './services/user-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoreFoodComponent } from './components/more-food/more-food.component';
import { SendResetPasswordComponent } from './components/send-reset-password/send-reset-password.component';






@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    RegisterComponent,
    LoginComponent,
    ResetPasswordComponent,
    CapitalizePipe,
    HighlightDirective,
    ShoppingCartDropdownComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    FooterComponent,
    ProfileComponent,
    ProductCategoriesComponent,
    ProductListComponent,
    MoreFoodComponent,
    SendResetPasswordComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 5000, // default timeout
      closeButton: true, // default close button
      progressBar: true, // default progress bar
      preventDuplicates: true, // prevent duplicate toasts
    }), // ToastrModule added
    

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
