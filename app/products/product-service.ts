import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProduct } from "./product";

@Injectable()

export class ProductService{

    private productUrl =  './api/products/products.json';

    constructor(private _http: HttpClient){ }


getProducts() : Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError)
}
private handleError(err: HttpErrorResponse) {
            let errorMessage = '';
            if (err.error instanceof Error) {
                errorMessage = `An error occurred: ${err.error.message}`;
            } else {
                errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
            }
            console.error(errorMessage);
            return Observable.throw(errorMessage);
        }
}


