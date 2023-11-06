import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTable } from 'primeng/treetable';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myProductData';
  data!: TreeNode[];
  cols!: any[];
  pdata!: any;
  viewDetail = false;

  constructor(private http: HttpClient, private product: ProductService) {}

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'First Name' },
      { field: 'age', header: 'Age' },
    ];
    this.data = [
      {
        label: 'Data Structures',
        icon: 'pi pi-folder',

        children: [
          {
            label: 'List',
            icon: 'pi pi-folder',

            children: [
              {
                label: 'Singly List',
                icon: 'pi pi-code',
              },
              {
                label: 'Doubly List',
                icon: 'pi pi-code',
              },
              {
                label: 'Circularly List',
                icon: 'pi pi-code',
              },
            ],
          },
          {
            label: 'Queue',
            icon: 'pi pi-folder',

            children: [
              {
                label: 'Simple Queue',
                icon: 'pi pi-code',
              },
              {
                label: 'Doubly ended Queue',
                icon: 'pi pi-code',
              },
            ],
          },
        ],
      },
      {
        label: 'Algorithms',
        icon: 'pi pi-folder',

        children: [
          {
            label: 'Greedy ',
            icon: 'pi pi-code',
          },
          {
            label: 'BFS ',
            icon: 'pi pi-code',
          },
          {
            label: 'Dynamic Programming',
            icon: 'pi pi-code',
          },
        ],
      },
    ];
  }

  getAllProductData() {
    this.viewDetail = false;
    this.product.callData().subscribe(
      (data: any) => {
        this.data = data;
        this.viewDetail = true;
      },
      (err: HttpErrorResponse) => {
        this.viewDetail = false;
        console.log(err);
      }
    );
  }
}
