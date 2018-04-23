import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  vhlForm: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.vhlForm = this.fb.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.vhlForm.get(field).valid && this.vhlForm.get(field).touched) || (this.vhlForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.vhlForm.valid) {
      this.authService.login(this.vhlForm.value);
    }
    this.formSubmitAttempt = true;
  }

}
