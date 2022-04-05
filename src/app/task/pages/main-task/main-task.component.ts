import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../../services/crud.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss'],
})
export class MainTaskComponent implements OnInit {
  tasks: Array<any> = [];

  user: any;
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.user = this.crudService.user;
    this.crudService.read().subscribe((res) => {
      this.tasks = res.tareas;
    });
  }
}
