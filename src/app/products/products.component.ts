import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  items: any[];
  editForm: boolean = false;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getAllItems().subscribe(response => {
      this.items = response;
      console.log(this.items);
    });
  }

  deleteItem(id: number): void {
    this.cartService.removeItem(id).subscribe(response => {
      this.items = response;
    });
  }

  addItem(form: NgForm): void {
    this.cartService.addItem(form.value).subscribe(response => {
      this.items = response;
      form.reset();
    });
  }

  updateItem(id: number, form: NgForm): void {
    this.cartService.updateItem(id, form.value).subscribe(response => {
      this.items = response;
    });
    this.toggleEditForm();
  }

  toggleEditForm(): void {
    this.editForm = !this.editForm;
  }
}
