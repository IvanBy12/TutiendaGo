import { Component } from '@angular/core';
import { productoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './prodcuto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  productoList:any=[];
  constructor(private productoService: productoService){}
  
  getallProductos(){
    this.productoService.getallProductosData().subscribe((data:{})=>{this.productoList=data})
  }
  ngOnInit(){
    this.getallProductos();
  }
}
