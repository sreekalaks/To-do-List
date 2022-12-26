import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo list';
  todos = [
    {
      label:'Bring milk',
      done: false,
      priority:3
    },
    {
      label:'Pay mobile bill',
      done:true,
      priority:1
    },
    {
      label:'clean house',
      done: false,
      priority:4
    },
    {
      label:'Fix the bulb',
      done: false,
      priority:5
    },
  ];

  addTodo(newTodoLabel: any){
   var newTode = {
      label: newTodoLabel,
      priority:1,
      done: false,
   };
   this.todos.push(newTode);
  }

  deleteTodo(todo:any) {
    this.todos = this.todos.filter( t => t.label !== todo.label);
  }
}

    
