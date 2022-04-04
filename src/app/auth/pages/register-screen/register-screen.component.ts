import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    username: ['text 8', [Validators.required, Validators.minLength(3)]],
    email: ['test1@mail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    password2: ['123456', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  register() {
    console.log(this.miFormulario.value);
    // this.authService.login(this.miFormulario.value).subscribe((res) => {
    //   if (res === true) {
    //     // almacenar usuario en el localStogare y stringify es para parsear el json
    //     localStorage.setItem('user', JSON.stringify(this.authService.user))
    //     this.router.navigateByUrl("/task")
    //   }else{
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Error ',
    //       text: res,
    //     })
    //   }
    // });

  }
}
