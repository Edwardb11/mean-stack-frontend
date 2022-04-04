import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    email: ['test1@mail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  login() {
    console.log(this.miFormulario.value);
    this.authService.login(this.miFormulario.value).subscribe((res) => {
      if (res) {
        // almacenar usuario en el localStogare
        localStorage
      }
    });

    // this.router.navigateByUrl("/task")
  }
}
