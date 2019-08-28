import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CartService } from "./cart.service";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
