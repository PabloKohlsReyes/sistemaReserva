import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      usuario: [ , Validators.required],
      password: [, Validators.required]
    })

  }

  ngOnInit(): void {

  }

  ingresar() {
    //console.log(this.form);
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;


   if(usuario == 'pkohls' && password == 'administrador'){
    //redireccionamos al dashboard
    this.fakeLoading();

   }else{
    //mostramos mensaje de error
      this.error();
      this.form.reset();
   }
  }
  error() {
    this._snackBar.open('Usuario o contraseña incorrecta', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'

    })
  }

  fakeLoading() {

    this.loading = true;
    setTimeout(() => {

      //redireccionamos al dashboard
      this.loading = false;
    }, 1500);
  }

}
