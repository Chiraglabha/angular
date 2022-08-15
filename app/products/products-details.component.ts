import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IProduct } from "./product";

@Component({
    templateUrl: "./products-details.component.html",
    styleUrls : ["./products-details.component.css"]
})

export class ProductsDetailsComponent{
    pageTitle: string = 'Product Details';
    product: IProduct | undefined
    
    constructor(private router: Router) { }

    onBack() : void {
        this.router.navigate(['/products']);
    }
}