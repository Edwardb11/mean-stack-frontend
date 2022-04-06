import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { MainTaskComponent } from './pages/main-task/main-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskUpdateComponent } from './pages/task-update/task-update.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [MainTaskComponent, TaskUpdateComponent, NavBarComponent],
  imports: [CommonModule, TaskRoutingModule, ReactiveFormsModule],
})
export class TaskModule {}
