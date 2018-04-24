import { IUsuario } from './usuario.interface';
import { UsuarioService } from './usuario.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements AfterViewInit {

  usuarios: Array<IUsuario> = [];

  displayedColumns: Array<string> = ['nome', 'login', 'acoes'];
  dataSource: MatTableDataSource<IUsuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router) {

    this.usuarios = [
      { id: '1', nome: 'Eduardo Sotero', login: 'eduardo.sotero' },
      { id: '2', nome: 'Paulo Gustavo', login: 'paulo.gustavo' },
      { id: '3', nome: 'Wellington Macedo', login: 'wellington.macedo' },
      { id: '4', nome: 'Eduardo Tell', login: 'eduardo.tell' },
      { id: '5', nome: 'Ana Paula', login: 'ana.paula' },
      { id: '6', nome: 'Luiz Antônio', login: 'luiz.antonio' },
      { id: '7', nome: 'Jonathan Alves', login: 'jonathan.alves' }
    ];

    this.dataSource = new MatTableDataSource(this.usuarios);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filtrar(filtroInput: string) {
    filtroInput = filtroInput.trim();
    filtroInput = filtroInput.toLowerCase();
    this.dataSource.filter = filtroInput;
  }

  adicionar() {
    this.router.navigate(['usuario/novo']);
  }
  
}
