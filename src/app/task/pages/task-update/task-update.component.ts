import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.scss'],
})
export class TaskUpdateComponent implements OnInit {
  user: any;
  id:string="";
  miFormulario: FormGroup = this.formBuilder.group({
    newTask: [''],
  });
  constructor(
    private crudService: CrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.crudService.user;
    this.activatedRoute.params.subscribe((params) => {
      this.miFormulario.setValue({ newTask: params['nombre'] });
      this.id=params['id'];
    });
  }
  update() {
    // console.log(this.miFormulario.value.newTask);

    this.crudService.update(this.id,this.miFormulario.value.newTask).subscribe((res) => {
      this.router.navigateByUrl('/task');
    })
  }
}
