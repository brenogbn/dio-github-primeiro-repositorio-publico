import { Component, OnInit } from "@angular/core"
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'course-list',
    template:'<ul>\
\
    <li *ngFor="let course of courses">\
      {{course.name}}\
    </li>\
  </ul>'
})
export class CourseListComponent implements OnInit{
    title = 'List of Courses';
    courses: Course[] = [];
    course: any;
    constructor(private cs: CourseService){
        this.courses = cs.getCourses();
    }
    ngOnInit(){
       /* this.courses = [
            {id: 1, name: 'course1'},
            {id: 2, name: 'course2'},
            {id: 3, name: 'course3'}
        ];*/
    }
}