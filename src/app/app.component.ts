import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  viewMode = 'somethingElse';
  // post = {
  //   title :'Angular',
  //   isFavorite : true
  // }
  //courses = ['Angular','React','Dotnet'];

  courses;

  onAdd(){
    this.courses.push({id:4,name:'courses4'})
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  onLoad(){
    this.courses =[
      {id:1,name:'course1'},
      {id:2,name:'course2'},
      {id:3,name:'course3'}
    ];
  }

  trackCourse(index,course){
    return course ? course.id : undefined;
  }

}
