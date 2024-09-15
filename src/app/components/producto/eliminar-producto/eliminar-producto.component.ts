import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';

@Component({
  selector: 'app-eliminar-curso',
  templateUrl: './eliminar-curso.component.html',
  styleUrls: ['./eliminar-curso.component.css']
})
export class EliminarProductoComponent {
  productoList:any=[];
  productoEliminado:boolean=false;

  eliminarprducto(id:any){
    this.ProductoService.Eliminarproducto(id).subscribe(()=>{
      this.productoEliminado=true;
    })
  }

  constructor(
    private ProductoService: ProductoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    ){}
  
  getallProductos(){
    this.ProductoService.getallProductosData().subscribe((data:{})=>{this.ProductoService=data})
  }
  ngOnInit(){
    this.getallProductos();
  }

  recibirIdProducto(idProducto:any){
    this.newMessage("Seguro quiere eliminar el curso?", idProducto)
  }

  newMessage(messageText: string, id:any) {
    this.toastr.error('actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => this.eliminarprducto(id));
  }


}

