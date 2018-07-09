import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private http: Http) { }
//success message
confirmationString:string ="New Task has been added";
isAdded: boolean=false;
//Add code
  taskObj:object ={};
  addNewTask = function(task)
  {
  this.taskObj=
  {
  "name":task.name,
  "status":task.status,
  "description":task.description,
  "date":task.date
  }
  this.http.post("http://localhost:5555/tasks/",this.taskObj).subscribe((res:Response) => {
  this.isAdded=true;
  })

  }
  

  ngOnInit() {
  }

}
