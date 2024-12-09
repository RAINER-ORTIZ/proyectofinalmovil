import { Injectable } from '@angular/core';

// Definición de la interfaz para las tareas
export interface Task {
  id: number;
  title: string;
  description: string;
  type: string; // trabajo, casa, negocios
  completed: boolean;
}

@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible globalmente
})
export class TasksService {
  private tasks: Task[] = []; // Almacena las tareas en un array
  private idCounter = 1; // Contador para asignar IDs únicos

  constructor() {
    // Agregar tareas iniciales para prueba
    this.addTask('Estudiar Angular', 'Repasar conceptos básicos', 'trabajo');
    this.addTask('Lavar la ropa', 'Usar detergente especial', 'casa');
  }

  // Obtener todas las tareas
  getTasks(): Task[] {
    return this.tasks;
  }

  // Agregar una nueva tarea
  addTask(title: string, description: string, type: string): void {
    this.tasks.push({
      id: this.idCounter++, // Incrementa el ID automáticamente
      title,
      description,
      type,
      completed: false,
    });
  }

  // Eliminar tarea por ID
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  // Obtener una tarea específica por ID
  getTaskById(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  // Cambiar el estado de completado de una tarea
  toggleCompleted(id: number): void {
    const task = this.getTaskById(id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
