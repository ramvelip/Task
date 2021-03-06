import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
         path: '',
         component: HomeComponent
      },
      {
        path: 'task',
        component: TaskComponent
     },
     {
      path: 'updateTask/:id',
      component: UpdateTaskComponent
   }
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
