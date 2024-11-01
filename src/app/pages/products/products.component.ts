import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { NgForOf } from '@angular/common';
import { Product } from '../../../core/interfaces/product';
import { ExcelService } from '../../../core/services/download-document';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  products: Product[] = [];
  private _productService: ProductService = inject(ProductService);
  private _downloadExcel: ExcelService = inject(ExcelService);
  constructor(){
    this._productService.getProducts().subscribe((products) => this.products = products)
  }
  public downloadProducts() {
    this._downloadExcel.exportAsExcelFile(this.products, 'products');
  }
}
