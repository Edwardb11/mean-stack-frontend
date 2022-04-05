import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.scss']
})
export class TaskUpdateComponent implements OnInit {
  task: any = {};
  user: any;
  miFormulario: FormGroup = this.formBuilder.group({
    newTask: [' ', Validators.required],
  });
  constructor(
    private crudService: CrudService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.crudService.user;
    this.activatedRoute.params.subscribe(params => {console.log(params);})

  }
  update(){

  }

}
