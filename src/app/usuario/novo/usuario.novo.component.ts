import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-usuario.novo',
  templateUrl: './usuario.novo.component.html',
  styleUrls: ['./usuario.novo.component.scss']
})
export class UsuarioNovoComponent implements OnInit {

  vhlForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private service: UsuarioService) { }

  ngOnInit() {
    this.vhlForm = this.fb.group({
      nome: ['', Validators.required],
      login: ['', Validators.required]
    });
  }

  cancelar() {
    this.router.navigate(['usuario']);
  }

  salvar(form: FormGroup) {
    console.log(form.value);
  }

}
