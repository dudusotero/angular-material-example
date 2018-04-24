import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DepartamentoService {

  private uri = 'http://localhost:4000/api/departamento/';

  constructor(private http: HttpClient) { }

  listar() { }

  editar(id) { }

  deletar(id) { }

  salvar(obj) {
    this.http.post(this.uri, obj)
      .subscribe(
        success => { console.log(success); },
        error => { console.log(error); }
      );
  }
}
