import { DepartamentoNovoComponent } from './departamento/novo/departamento.novo.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { UsuarioNovoComponent } from './usuario/novo/usuario.novo.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario/novo',
    component: UsuarioNovoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'departamento',
    component: DepartamentoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'departamento/novo',
    component: DepartamentoNovoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
