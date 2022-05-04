import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDeleteComponent,
    ProductEditComponent,
    ProductCreateComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    CategoryDeleteComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
