import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeModule } from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    HttpClientModule,
    ButtonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ProductService],
})
export class AppModule {}
