import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "3 Courses";
  courses;
  colSpan = 2;
  email = 'me@example.com';

  constructor(service : CoursesService) { 
    this.courses = service.getCourses();
  }

  ngOnInit() {
  }

  onSave($event){
    $event.stopPropagation(); //Stops bubbling the events
    console.log("Button was clicked!",$event);
  }

  onDivClick(){
    console.log("Div was clicked!");
  }

  onKeyUp(){
    console.log(this.email);
  }

  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2019,7,2)
  }

  text = "My name is Ramesh Shah. I am from Nepal. I am a dot net developer. I love coding."

}
