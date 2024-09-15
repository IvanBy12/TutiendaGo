import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { AgregarProductoComponent } from './components/producto/agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './components/producto/eliminar-producto/eliminar-producto.component';


@NgModule({
    declarations: [
      AppComponent,
      InicioComponent,
      AgregarProductoComponent,
      EliminarProductoComponent,
      MenuComponent
    ],
    imports: [
     
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      CommonModule,
      ReactiveFormsModule,
      ToastrModule.forRoot({
        positionClass: 'toast-bottom-center',
      })
    ],
    providers: [],
    bootstrap: [AppComponent]                                       
  })
  export class AppModule { }
  
