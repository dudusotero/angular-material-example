import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  private uri = 'http://localhost:4000/api/usuario/';

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
