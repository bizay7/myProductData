import { Injectable } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTable } from 'primeng/treetable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('amit:Quinnox@1'),
    }),
  };
  URL = `http://qnx-s4hana.quinnox.com:50000/sap/opu/odata/sap/API_PRODUCT_SRV/A_Product(Product='TG0013')?$expand=to_Plant,to_Description&$format=json`;

  constructor(private http: HttpClient) {}

  callData() {
    return this.http.get(this.URL, this.httpOptions);
  }
}
