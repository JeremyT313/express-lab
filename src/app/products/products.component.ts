import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  items: any[];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getAllItems().subscribe(response => {
      this.items = response;
      console.log(this.items);
    });
  }
}
