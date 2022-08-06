import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-demo';
  courses$:any;
  course$:any;
  constructor(db:AngularFireDatabase){
   this.courses$=db.list('/Courses');
   this.course$=db.object('/Courses/1');
  //  this.courses$.push({name:"shubham"});//add object
  //  this.courses$.object('/Courses/1')set({});//add object
  }
}
