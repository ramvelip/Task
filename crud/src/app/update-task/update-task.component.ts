import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
// 2 below redirect to new page automatic
import { ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

//update
id:number;
data:object ={};
tasks =[];
//--------[----to check the product is exist
exist=false;
taskObj:object = {};
private headers = new Headers ({ 'Content-Type':'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: Http) { }
  //success message
confirmationString:string ="New Task has been updated";
isUpdated: boolean=false;
  //update code
  updateTask(task){
    this.taskObj=
    {
    "name":task.name,
    "status":task.status,
    "description":task.description,
    "date":task.date
    };
    const url =`${"http://localhost:5555/tasks"}/${this.id}`;
    this.http.put(url, JSON.stringify(this.taskObj), {headers: this.headers})

.toPromise()
.then(() =>{
  this.isUpdated=true;
this.router.navigate(['/']);

})
  }
  
  ngOnInit() {
    
//print the value in text field when u click on update

    this.route.params.subscribe(params=>{
      this.id=+params['id'];
      });
      this.http.get("http://localhost:5555/tasks").subscribe
       
       (
      (res:Response) => {
      
      this.tasks= res.json();
      
      for(var i=0;i<this.tasks.length;i++)
      {
      if(parseInt(this.tasks[i].id)===this.id)
      {
        this.exist= true;
      this.data=this.tasks[i];
      break;
      }
      else
{
this.exist=false;
}
      }
      }
      )


  }

}
