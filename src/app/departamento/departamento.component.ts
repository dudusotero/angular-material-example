import { IDepartamento } from './departamento.interface';
import { DepartamentoService } from './departamento.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})

export class DepartamentoComponent implements AfterViewInit {

  departamentos: Array<IDepartamento> = [];

  displayedColumns: Array<string> = ['id', 'nome', 'status', 'acoes'];
  dataSource: MatTableDataSource<IDepartamento>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router) {

    this.departamentos = [
      { id: '#1', nome: 'Eduardo Sotero', status: 'ativo' },
      { id: '#2', nome: 'Paulo Gustavo', status: 'ativo' },
      { id: '#3', nome: 'Wellington Macedo', status: 'ativo' },
      { id: '#4', nome: 'Eduardo Tell', status: 'ativo' },
      { id: '#5', nome: 'Ana Paula', status: 'ativo' },
      { id: '#6', nome: 'Luiz Antônio', status: 'ativo' },
      { id: '#7', nome: 'Jonathan Alves', status: 'ativo' },
    ];

    this.dataSource = new MatTableDataSource(this.departamentos);
  
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
    this.router.navigate(['departamento/novo']);
  }
}


