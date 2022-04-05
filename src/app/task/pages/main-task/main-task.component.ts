import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../../services/crud.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss'],
})
export class MainTaskComponent implements OnInit {
  tasks: Array<any> = [];
  user: any;
  miFormulario: FormGroup = this.formBuilder.group({
    newTask: [' ', Validators.required],
  });
  constructor(
    private crudService: CrudService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.crudService.user;
    this.crudService.read().subscribe((res) => {
      this.tasks = res.tareas;
    });
  }

  update(task: any) {
    const { _id } = task;
    this.router.navigateByUrl(`/task/${_id}`);
  }

  create() {
    // console.log(this.miFormulario.controls['newTask'].value);

    this.crudService
      .create(this.miFormulario.value.newTask)
      .subscribe((response) => {
        // Resetear el formulario
        this.miFormulario.reset();
        // para actualizar la lista de tareas se vuelve a leer
        this.crudService.read().subscribe((res) => {
          this.tasks = res.tareas;
        });
      });
  }

  delete(id: string) {
    this.crudService.delete(id).subscribe((response) => {
      // para actualizar la lista de tareas se vuelve a leer
      this.crudService.read().subscribe((res) => {
        this.tasks = res.tareas;
      });
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth');
  }
}
