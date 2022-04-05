import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss']
})
export class MainTaskComponent implements OnInit {

  user:any
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    // llamar al user desde el servicio
    // this.user=this.authService.user
    // llamar ak user desde localStogare
    this.user=JSON.parse(localStorage.getItem('user')||'');
  }

  logout(){
    localStorage.clear()
   this.router.navigateByUrl('/auth')
  }
}
