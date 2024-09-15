import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgregarProductoComponent  } from './components/producto/agregar-producto/agregar-producto.component';
import { EliminarProductoComponent } from './components/producto/eliminar-producto/eliminar-producto.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';

const routes: Routes = [
  {path : 'producto', component: ProductoComponent },
  {path: 'registrar', component: SignupComponent},
  {path: 'ingresar', component: LoginComponent},
  {path: 'inicio', component:InicioComponent},
  {path: '', component:InicioComponent},
  {path: 'agregar/producto', component:AgregarProductoComponent},
  {path: 'eliminar/producto', component:EliminarProductoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };

