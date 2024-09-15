import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { productoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class AgregarProductoComponent  {

  productoForm: any = this.formBuilder.group({
    nombre: '',
    precio: 0,
    cantidad: '',
    descripcion: '',
  });
  editproducto: boolean = false;
  idProducto: any;

  constructor(
    private productoService: productoService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}


  nuevoProductoEntrada() {
    this.productoService.nuevoProducto(localStorage.getItem('accessToken'), this.productoForm.value).subscribe(
      () => {
        alert("Producto registrado");
        this.router.navigateByUrl('/producto');
      }
    );
  }
}
