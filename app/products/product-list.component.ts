import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product-service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageMargin: number = 20;
    imageWidth: number = 60;
    showImage: boolean = false;
    errorMessage: string;
    sub: Subscription; 

    _listfilter: string;
   
    get listfilter(): string {
        return this._listfilter;
    }
    set listfilter(value: string) {
        this._listfilter = value;
        this.filterProducts = this.listfilter ? this.performFilter(value) : this.products;
    }


    filterProducts: IProduct[] = []

    products: IProduct[] = [];

    constructor(private productService: ProductService) { }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }


    setToggle(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filterProducts = this.products;
            },
    
            error: err => this.errorMessage = err
        });
    }

    onRatingClicked(meassage: string): void {
        this.pageTitle = 'Product List: ' + meassage;
    }
}


