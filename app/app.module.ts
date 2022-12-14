import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductsDetailsComponent } from './products/products-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductsDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : 'products', component : ProductListComponent },
      { path : 'products/:id', component : ProductsDetailsComponent },
      { path : 'welcome', component : WelcomeComponent },
      { path : '', redirectTo : 'welcome', pathMatch : 'full' },
      { path : '**', redirectTo : 'welcome', pathMatch : 'full' }
    ])
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
