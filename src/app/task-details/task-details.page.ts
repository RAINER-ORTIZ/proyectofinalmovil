import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {
  taskId: number | null = null;
  task: Task | null = null;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    // Obtiene el ID de la tarea desde la ruta
    const idParam = this.route.snapshot.paramMap.get('id');
    this.taskId = idParam ? Number(idParam) : null;

    // Verifica si el ID es válido
    if (this.taskId !== null) {
      

      // Manejo si la tarea no se encuentra
      if (!this.task) {
        console.error(`Tarea con ID ${this.taskId} no encontrada.`);
      }
    } else {
      console.error('ID de tarea no válido.');
    }
  }
}
